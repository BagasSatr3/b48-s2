import { Box, Text, Image} from "@chakra-ui/react"
import { useParams } from "react-router-dom"
// import ThreadsData from '../../../utils/dummy-data.json';
import {useEffect, useState} from 'react';
import { ThreadCard } from ".";
import { API } from "@/libs/api";

export function ThreadDetail() {
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

    const {id} = useParams();
    // const [Threads] = useState(ThreadsData);
    const element = Threads.find(el => el.id === Number(id));
  
    return element ? (
        <>
        <Box  >
        <Box color={'white'} p={5} backgroundColor={'blackAlpha.300'}>
        <Box display={'flex'} >
          <Image src={element.user?.profile_picture} objectFit={'cover'} rounded={'full'} w={'50px'} h={'50px'}/>
          <Box>
            <Box display={'flex'} alignItems={'center'} flexDirection={'row'} mt={3}>
              <Text ml={5} fontWeight={'bold'}>{element.user?.username}</Text>
              <Text ml={3}>@{element.user?.username}</Text>
              <Text ml={3} fontWeight={'thin'} color={'grey'}>4</Text>
            </Box>
            <Box ml={5} mt={2}>
              <Text>{element.content}</Text>
              <Image mt={4} src={element.image} objectFit={'cover'} rounded={'md'} w={'20em'} h={'18em'}/>
              {/* <Box mt={5}>
                <Button onClick={handlerLikeClick} colorScheme={isLiked ? "red" : "gray"}><i className="fa-regular fa-thumbs-up "></i>{likesCount}</Button>
                <Link to={"/detail/" + element.id} key={element.id}> 
                <Button ml={5}>{element.replies_count} Replies</Button>
                </Link>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
      </Box>
        </>
    ) : <>
        <Text ml={3} fontWeight={'thin'} color={'grey'}>Your Data Isn't Here</Text>
        </>
}