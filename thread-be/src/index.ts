import { AppDataSource } from "./data-source"
import { Request, Response } from "express"
import router from "./route"
import express = require("express")
import dotenv = require("dotenv")
import bodyParser = require("body-parser")
// import { processQueue } from "./worker/ThreadWorker"
// import * as cookieParser from "cookie-parser"
dotenv.config()


AppDataSource.initialize().then(async () => {
    const app = express()
    const port = process.env.PORT
    const cors = require('cors')

    // app.use(cookieParser())
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // const route = express.Router()

    app.use(express.json())
    app.use("/api/v1", router)

    // processQueue()

    app.get("/", (req: Request, res: Response) => {
        res.send('hello world')
    })

    app.listen(port, () => {
        console.log('Server is running!')
    })



}).catch(error => console.log(error))
