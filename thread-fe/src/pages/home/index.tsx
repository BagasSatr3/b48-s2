import {useEffect, useState} from 'react'
import { ThreadCard } from '../../features/thread'
import { Box } from "@chakra-ui/react"
import { API } from '@/libs/api'

export function Home() {
    const [Threads, setThreads] = useState<ThreadCard[]>([])
    const fetchData = async () => {
        try {
            const res = await API.get("/threads")
            setThreads(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <>

        <Box >
            {Threads.map((item,index) => (
        <ThreadCard key={index} content={item.content} image={item.image} user={item.user} id={item.id}/>
      ))}
        </Box>
        </>

    //     <Box >
    //         {Threads.map((item,index) => (
    //     <ThreadCard key={index} author_picture={item.author_picture}author_full_name={item.author_full_name} author_username={item.author_username} posted_at={item.posted_at} content={item.content}image={item.image} like_count={item.like_count} replies_count={item.replies_count} is_liked={item.is_liked}
    //     id={item.id}/>
    //   ))}
    //     </Box>

    )
}