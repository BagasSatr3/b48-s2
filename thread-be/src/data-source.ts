import { DataSource } from "typeorm"
import { Thread } from "./entities/Threads"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "containers-us-west-91.railway.app",
    port: 6404,
    username: "postgres",
    password: "xo4jf31B0YsIivYJi372",
    database: "railway",
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
})
