import {useEffect, useState} from 'react'
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react"
import { API } from '@/libs/api'
import { IThreadCard } from '@/interface/thread'
import { ThreadCard } from '@/features/thread'
import { useThread } from '@/features/thread/hooks'

export function Home() {
  const {handleChange, handleAddContent} = useThread()

    function hook() {
    const [Threads, setThreads] = useState<IThreadCard[]>([])
    const fetchData = async () => {
        try {
            const res = await API.get("/threads", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            
            setThreads(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return Threads
}
const nes = hook()

    return (

        <>
        <Box>
            <form encType="">
              <FormControl>
                <Text mt={2} fontSize={"xl"}>Content</Text>
                <Input name={"content"} id={"content"} placeholder="Here Content" autoFocus={false} onChange={handleChange}/>
                <Text mt={2} fontSize={"xl"}>Image</Text>
                <Input type={"text"} name={"image"} id={"image"} placeholder="Your Email Here" autoFocus={false} onChange={handleChange}/>
                <Button colorScheme={"black"} backgroundColor={"black"} onClick={handleAddContent}>Create</Button>
              </FormControl>
            </form>
          </Box>
        <Box >
            {nes.map((item,index) => (
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