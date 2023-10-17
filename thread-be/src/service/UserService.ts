import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { User } from '../entities/Users';
import { Thread } from "../entities/Threads";
import { v2 as cloudinary } from "cloudinary"

class UserService {
    private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User)

    private readonly threadRepository: Repository<Thread> =
    AppDataSource.getRepository(Thread)

    async find(req: Request, res: Response) {
        try {
            const users = await this.userRepository.find()
            return res.status(200).json(users)
        } catch (err) {
            return res.status(500).json({ error: "error while getting users" })
        }
    }

    async profile(req: Request, res: Response) {
        try {
            const results = await this.userRepository.findOne({
                where: {
                    id: Number(req.params.id)
                },
                relations: ["threads", "threads.user"]
            })
            return res.send(results)
        } catch (err) {
            return res.status(500).json({ error: "error while getting users" })
        }
    }

    async post(req: Request, res: Response) {
        // try {
            const user = this.userRepository.create(req.body)
            const results = this.userRepository.save(user)
            return res.send(results)
        // } catch (err) {
        //     return res.status(500).json({ error: "error while posting users" })
        // }
    }

    async update(reqBody?: any, id?: any, filename?: any): Promise<any> {
        try {
            const user = await this.userRepository.findOneOrFail({
                where: {
                    id: id
                }
            })

            cloudinary.config({ 
                cloud_name: 'dlkgkipax', 
                api_key: '371515624215563', 
                api_secret: '2brsnHMo64nR2G7AMw133GDij-k' 
            });

            const cloudinaryResponse = await cloudinary.uploader.upload(
                "./uploads/" + filename
            )

            user.username = reqBody.username
            user.full_name = reqBody.fullName
            user.profile_description = reqBody.description
            user.profile_picture = cloudinaryResponse.secure_url
            
            const userUpdate= await this.userRepository.save(user)
            return {
                message: 'Sucessfully update user data!',
                user: userUpdate,
            }
        } catch (err) {
            throw new Error("Something wrong on the server!")
        }
    }

    async delete(req: Request, res: Response) {
        const results = await this.userRepository.delete(req.params.id)
        return res.send(results)
    }
}

export default new UserService()