import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Thread } from "./Threads";
// import { Like } from "./Likes";
// import { Replies } from "./Repiles";

@Entity({ name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column({ select: false })
    password: string
    
    @Column({ nullable: true })
    profile_picture: string

    @Column({ nullable: true })
    profile_description: string

    @OneToMany(() => Thread, (threads) => threads.user)
    threads: Thread[]

    // @OneToMany(() => Like, (likes) => likes.user)
    // likes: Like[]

    // @OneToMany(() => Replies, (replies) => replies.user)
    // replies: Replies[]
}