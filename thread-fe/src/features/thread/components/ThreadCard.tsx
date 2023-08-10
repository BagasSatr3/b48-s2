import { Box,  Text, Image, Stack, HStack, VStack, Button, WrapItem, Center, Grid, GridItem, Container  } from "@chakra-ui/react"
import {useState} from 'react'
import {Link, NavLink } from "react-router-dom"
interface ThreadCard {
    author_picture: string,
    author_full_name: string,
    author_username: string,
    posted_at: string,
    content: string,
    image: string,
    like_count: number,
    id: number,
    replies_count: number,
    is_liked: boolean
}

export function ThreadCard(props: ThreadCard) {
  const [likesCount, setLikesCount] = useState(props.like_count || 0)
  const [isLiked, setIsLiked] = useState(props.is_liked || false)

  const handlerLikeClick = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1)
    }
    setIsLiked(!isLiked)
  }
  
    return (
      <Box w="600px" borderLeft={"1px"} borderRight={"1px"} borderColor={"gray"}> 
        <Container >
          <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={2} py={5}  >
            <GridItem rowSpan={2} colSpan={1}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image borderRadius="50%" objectFit="cover" w="50px" h="50px" src={props.author_picture} alt="" />
              </Box>
            </GridItem>
            <GridItem colSpan={4}>
            <HStack mt={2}>
                  <Text ml="4">{props.author_full_name}</Text>
                  <Text>@{props.author_username}</Text>
                  <Text>{props.posted_at}</Text>
                </HStack>
            </GridItem>
            <GridItem colSpan={4}>
            <Text>@{props.content}</Text>
            </GridItem>
            <GridItem colSpan={4}>
              <Button mx={3} onClick={handlerLikeClick} colorScheme={isLiked ? "red" : "gray"}><i className="fa-regular fa-thumbs-up "></i>{likesCount}</Button>
              
      <Link to={"/detail/" + props.id} key={props.id}> 
              <Button mx={3}>{props.replies_count}  replies</Button>
        </Link>
              
            </GridItem>
          </Grid>
          <hr />
        </Container>
      </Box>
    )
}