import { Request, Response } from "express";
import AuthService from "../service/AuthService";

class AuthController {
    find(req: Request, res: Response) {
        AuthService.find(req,res)
    }
    register(req: Request, res: Response) {
        AuthService.register(req,res)
    }

    login(req: Request, res: Response) {
        AuthService.login(req,res)
    }

    async check(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const response = await AuthService.check(id)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: error.message })
    }

    // logout(req: Request, res: Response) {
    //     AuthService.logout(req,res)
    // }
}
}

export default new AuthController()