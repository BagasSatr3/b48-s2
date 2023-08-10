// import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// import { Thread } from "./Threads";
// import { User } from "./Users";

// @Entity({ name: 'replies' })
// export class Replies {
//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     content: string

//     @ManyToOne(() => Thread, (threads) => threads.replies)
//     threads: Thread
    
//     @ManyToOne(() => User, (user) => user.replies)
//     user: User

// }