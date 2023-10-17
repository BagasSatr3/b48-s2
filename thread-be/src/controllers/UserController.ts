import { Request, Response } from "express";
import UserService from "../service/UserService";

class UserController {
    find(req: Request, res: Response) {
        UserService.find(req,res)
    }

    profile(req: Request, res: Response) {
        UserService.profile(req,res)
    }
    
    post(req: Request, res: Response) {
        UserService.post(req,res)
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const filename = res.locals.filename
            const { username, fullName, description } = req.body;
            const response = await UserService.update( { username, fullName, description }, id, filename)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(200).json(error)
        }
    }
    delete(req: Request, res: Response) {
        UserService.delete(req,res)
    }
}

export default new UserController()