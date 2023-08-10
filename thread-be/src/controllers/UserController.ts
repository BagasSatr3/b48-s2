import { Request, Response } from "express";
import UserService from "../service/UserService";

class UserController {
    find(req: Request, res: Response) {
        UserService.find(req,res)
    }

    findOne(req: Request, res: Response) {
        UserService.findOne(req,res)
    }

    post(req: Request, res: Response) {
        UserService.post(req,res)
    }

    update(req: Request, res: Response) {
        UserService.update(req,res)
    }
    delete(req: Request, res: Response) {
        UserService.delete(req,res)
    }
}

export default new UserController()