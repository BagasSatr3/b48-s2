import { Request, Response } from "express";
import FollowsService from "../service/FollowsService";

class FollowsController {
    async find(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession
            const limit = (req.query.limit ?? 0) as number
            const type = (req.query.type ?? "") as string

            const response = await FollowsService.find(loginSession, type, limit)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async followUser(req: Request, res: Response) {
        try {
            const followerId = res.locals.loginSession
            const followedId = parseInt(req.params.userId)

            const response = await FollowsService.followUser(followerId, followedId)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async unfollowUser(req: Request, res: Response) {
        try {
            const followerId = res.locals.loginSession
            const followedId = parseInt(req.params.userId)

            const response = await FollowsService.unfollowUser(
                followerId,
                followedId
            )
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

export default new FollowsController()