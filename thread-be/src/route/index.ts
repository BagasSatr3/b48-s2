import * as express from 'express'
import { Request, Response } from 'express'
import ThreadsController from '../controllers/ThreadsController'
import UserController from '../service/UserService'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!")
})

// router.get("/threads", (req: Request, res:Response) => {
//     res.status(200).json({
//         message: "Hello this is threads!"
//     })
// })

router.get("/threads", ThreadsController.find)
router.get("/threads/:id", ThreadsController.findOne)
router.post("/threads", ThreadsController.post)
router.put("/threads/:id", ThreadsController.update)
router.delete("/threads/:id", ThreadsController.delete)

router.get("/user", UserController.find)
router.get("/user/:id", UserController.findOne)
router.post("/user", UserController.post)
router.put("/user/:id", UserController.update)
router.delete("/user/:id", UserController.delete)

export default router