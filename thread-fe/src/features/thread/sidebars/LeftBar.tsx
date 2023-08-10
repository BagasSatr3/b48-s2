import { Box, Button, Text } from "@chakra-ui/react"
import { InfoIcon, DragHandleIcon, SearchIcon, LinkIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"

export function LeftBar() {
    return (
        <>
        <Box p={6} w={'20em'}>
          <Text fontSize={'4xl'} mx={2} color={'green.300'} fontWeight={'bold'}>Setsu</Text>
          <Link to="/">
            <Text fontSize={'xl'} mt={3} mx={2} fontWeight={'light'} color={'white'}><DragHandleIcon mr={3} /> Home</Text>
          </Link>
          <Link to="/">
            <Text fontSize={'xl'} mt={3} mx={2} fontWeight={'light'} color={'white'}><SearchIcon mr={3} /> Search</Text>
          </Link>
          <Link to="/">
            <Text fontSize={'xl'} mt={3} mx={2} fontWeight={'light'} color={'white'}><LinkIcon mr={3} /> Follow</Text>
          </Link>
          <Link to="/">
            <Text fontSize={'xl'} mt={3} mx={2} fontWeight={'light'} color={'white'}><InfoIcon mr={3} /> Profile</Text>
          </Link>
        <Button mt={3} mx={2} w={'17em'} backgroundColor={'green.500'} colorScheme={'green'} rounded={'50px'}>Create Post</Button>
        </Box>
      </>
    )
}