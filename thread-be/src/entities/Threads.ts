// import { Replies } from './Repiles';
// import { Like } from './Likes';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from "./Users"

@Entity({name: "threads"})
export class Thread {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column()
    image: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    posted_at: Date

    @ManyToOne(() => User, (user) => user.threads)
    user: User
    
    // @OneToMany(() => Like, (like) => like.threads)
    // likes: Like[]

    // @OneToMany(() => Replies, (reply) => reply.threads)
    // replies: Replies[]
}
