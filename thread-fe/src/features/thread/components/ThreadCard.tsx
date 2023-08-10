import { Image, Box, Button, Text } from "@chakra-ui/react"
import {useState} from 'react'
import {Link} from "react-router-dom"

export interface User {
  id: number,
  author_picture: string,
  author_full_name: string,
  author_username: string
}

export interface ThreadCard {
  // posted_at: string,
  content: string,
  image: string,
  // like_count: number,
  id: number,
  // replies_count: number,
  // is_liked: boolean
  
  user: User
}

export function ThreadCard(props: ThreadCard) {
  const [likesCount, setLikesCount] = useState(2 || 0)
  const [isLiked, setIsLiked] = useState(true || false)

  const handlerLikeClick = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1)
    }
    setIsLiked(!isLiked)
  }
    return (
        <>
        <Box  >
        <Box color={'white'} p={5} backgroundColor={'blackAlpha.300'}>
        <Box display={'flex'} >
          <Image src="{props.user.author_picture}" objectFit={'cover'} rounded={'full'} w={'50px'} h={'50px'}/>
          <Box>
            <Box display={'flex'} alignItems={'center'} flexDirection={'row'} mt={3}>
              <Text ml={5} fontWeight={'bold'}>{props.user.author_full_name}</Text>
              <Text ml={3}>@{props.user.author_username}</Text>
              <Text ml={3} fontWeight={'thin'} color={'grey'}>4h</Text>
            </Box>
            <Box ml={5} mt={2}>
              <Text>{props.content}</Text>
              <Image mt={4} src={props.image} objectFit={'cover'} rounded={'md'} w={'20em'} h={'18em'}/>
              <Box mt={5}>
                <Button onClick={handlerLikeClick} colorScheme={isLiked ? "red" : "gray"}><i className="fa-regular fa-thumbs-up"></i>{likesCount}</Button>
                <Link to="/" key={props.id}> 
                <Button ml={5}>10 Replies</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      </Box>
        {/* <Box  >
        <Box color={'white'} p={5} backgroundColor={'blackAlpha.300'}>
        <Box display={'flex'} >
          <Image src={props.author_picture} objectFit={'cover'} rounded={'full'} w={'50px'} h={'50px'}/>
          <Box>
            <Box display={'flex'} alignItems={'center'} flexDirection={'row'} mt={3}>
              <Text ml={5} fontWeight={'bold'}>{props.author_full_name}</Text>
              <Text ml={3}>@{props.author_username}</Text>
              <Text ml={3} fontWeight={'thin'} color={'grey'}>{props.posted_at}</Text>
            </Box>
            <Box ml={5} mt={2}>
              <Text>{props.content}</Text>
              <Image mt={4} src={props.image} objectFit={'cover'} rounded={'md'} w={'20em'} h={'18em'}/>
              <Box mt={5}>
                <Button onClick={handlerLikeClick} colorScheme={isLiked ? "red" : "gray"}><i className="fa-regular fa-thumbs-up "></i>{likesCount}</Button>
                <Link to={props.id.toString()} key={props.id}> 
                <Button ml={5}>{props.replies_count} Replies</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      </Box> */}
      <hr />
        </>
    )
}