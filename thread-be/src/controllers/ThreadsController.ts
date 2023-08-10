import { Request, Response } from "express";
import ThreadsService from "../service/ThreadsService";

class ThreadsController {
    find(req: Request, res: Response) {
        ThreadsService.find(req,res)
    }

    findOne(req: Request, res: Response) {
        ThreadsService.findOne(req,res)
    }

    post(req: Request, res: Response) {
        ThreadsService.post(req,res)
    }

    update(req: Request, res: Response) {
        ThreadsService.update(req,res)
    }
    delete(req: Request, res: Response) {
        ThreadsService.delete(req,res)
    }
}

export default new ThreadsController()