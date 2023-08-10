import { ThreadCard } from './features/thread';
import {useState} from 'react';
import ThreadsData from './utils/fake_data/dummy_data.json';
import { Box } from "@chakra-ui/react"


export default function App() {
  // console.log(ThreadsData)
  const [Threads, _] = useState(ThreadsData)
  return (
    <Box >
      
    {Threads.map((item,index) => (
        <ThreadCard key={index} author_picture={item.author_picture}author_full_name={item.author_full_name} author_username={item.author_username} posted_at={item.posted_at} content={item.content}image={item.image} like_count={item.like_count} replies_count={item.replies_count} is_liked={item.is_liked}
        id={item.id}/>
      ))}
    </Box>
  )
  
}

