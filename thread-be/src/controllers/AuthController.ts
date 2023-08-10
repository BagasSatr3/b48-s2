import { Request, Response } from "express";
import AuthService from "../service/AuthService";

class AuthController {
    find(req: Request, res: Response) {
        AuthService.find(req,res)
    }
    post(req: Request, res: Response) {
        AuthService.post(req,res)
    }
}

export default new AuthController()