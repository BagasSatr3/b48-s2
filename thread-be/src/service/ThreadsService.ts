import { Thread } from './../entities/Threads';
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

class ThreadService {
    private readonly threadRepository: Repository<Thread> =
    AppDataSource.getRepository(Thread)

    async find(req: Request, res: Response) {
        try {
            const threads = await this.threadRepository.find(
                { relations: ['user'] }
            )
            return res.status(200).json(threads)
        } catch (err) {
            return res.status(500).json({ error: "error while getting threads" })
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            const results = await this.threadRepository.findOneBy({
                id: Number(req.params.id)
            })
            return res.send(results)
        } catch (err) {
            return res.status(500).json({ error: "error while getting threads" })
        }
    }

    async post(req: Request, res: Response) {
        try {
            const data = req.body
            const thread = await this.threadRepository.create({
                content: data.content,
                image: data.image,
            })
            const results = await this.threadRepository.save(thread)
            return res.send(results)
        } catch (err) {
            return res.status(500).json({ error: "error while posting threads" })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const thread = await this.threadRepository.findOneBy({
                id: id
            })
            this.threadRepository.merge(thread, req.body)
            const results = await this.threadRepository.save(thread)
            return res.send(results)
        } catch (err) {
            return res.status(500).json({ error: "error while updating threads" })
        }
    }

    async delete(req: Request, res: Response) {
        const results = await this.threadRepository.delete(req.params.id)
        return res.send(results)
    }
}

export default new ThreadService()