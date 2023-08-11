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
}

export default new AuthController()