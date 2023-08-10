import { Box, Text, Flex, Image, Stack, HStack, VStack, Button, WrapItem, Center, Grid, GridItem, Container  } from "@chakra-ui/react"
import { NavLink,Link, useParams } from "react-router-dom"
import ThreadsData from '../utils/fake_data/dummy_data.json';
import {useState, useEffect} from 'react';

export function DetailTweet() {
    const {id} = useParams();
    const [Threads] = useState(ThreadsData);
  const element = Threads.find(el => el.id === Number(id));
  return element ? 
    <>
        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={2} py={5}  >
            <GridItem rowSpan={2} colSpan={1}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image borderRadius="50%" objectFit="cover" w="50px" h="50px" src={element.author_picture} alt="" />
              </Box>
            </GridItem>
            <GridItem colSpan={4}>
            <HStack mt={2}>
                  <Text ml="4">{element.author_full_name}</Text>
                  <Text>@{element.author_username}</Text>
                  <Text>{element.posted_at}</Text>
                </HStack>
            </GridItem>
            <GridItem colSpan={4}>
            <Text>{element.content}</Text>
            </GridItem>
            {/* <GridItem colSpan={4}>
              <Button mx={3} onClick={handlerLikeClick} colorScheme={isLiked ? "red" : "gray"}><i className="fa-regular fa-thumbs-up "></i>{likesCount}</Button>
              <Link to={"/detail/" + props.id.toString()} key={props.id}> <Button mx={3}>{props.replies_count}  replies</Button></Link>
            </GridItem> */}
          </Grid>
    </>
  
    : <>
        <h1>Your Data Isn't here!</h1>
    </>;
}


