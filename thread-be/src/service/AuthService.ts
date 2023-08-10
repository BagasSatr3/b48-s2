import { Repository } from "typeorm";
import { User } from "../entities/Users";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

class AuthService {
    private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User)

    async find(req: Request, res: Response) {
        try {
            const user = await this.userRepository.find()
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ error: "error while getting users" })
        }
    }

    async post(req: Request, res: Response) {
        try {
            const user = await this.userRepository.create(req.body)
            const results = await this.userRepository.save(user)
            return res.send(results)
        } catch (err) {
            return res.status(500).json({ error: "error while posting threads" })
        }
    }
}

export default new AuthService()