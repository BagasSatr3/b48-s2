import { AppDataSource } from "./data-source"
import { Thread } from "./entities/Threads"
import * as express from "express"
import { Request, Response } from "express"
import router from "./route"
// import * as dotenv from "dotenv"
// import * as cookieParser from "cookie-parser"
// dotenv.config()

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 5000
    const cors = require('cors')

    // app.use(cookieParser())
    app.use(cors())

    // const route = express.Router()

    app.use(express.json())
    app.use("/api/v1", router)

    app.get("/", (req: Request, res: Response) => {
        res.send('hello world')
    })

    app.listen(port, () => {
        console.log('Server is running on localhost 5000')
    })



}).catch(error => console.log(error))
