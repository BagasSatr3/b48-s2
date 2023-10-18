import { RootState } from "@/stores/types/rootState";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ProfileCard() {
    const auth = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate()
    console.log(auth);
    
    
    return (
        <>
            <Box backgroundColor={'blackAlpha.400'} rounded={'lg'}>
            <Text fontSize={'lg'} p={2} mx={1} color={'white'} fontWeight={'bold'}>My Profile</Text>
            <Image src={auth.profile_picture}  m={3} objectFit={'cover'} rounded={'xl'} w={'18em'} h={'10em'}/>
            <Image src={auth.profile_picture} ml={7} mt={-20} objectFit={'cover'} rounded={'full'} w={'7em'} h={'7em'}/>
            <Button display={'flex'} justifyContent={'end'} float={'right'} mr={7} mt={-15} rounded={'full'} onClick={() => {
                navigate(`/profile/edit/${auth.id}`)
            }}>Edit Profile</Button>
            <Box p={4} mx={1}>
              <Text fontSize={'xl'}  color={'white'} fontWeight={'bold'}>{auth.full_name}</Text>
              <Text color={'gray'} fontWeight={'light'}>@{auth.username}</Text>
              <Text color={'white'}>{auth.profile_description}</Text>
              <Box display={'flex'} mt={2}>
              <Text color={'white'}>200</Text>
              <Text color={'gray'} ml={1}>Followers</Text>
              <Text color={'white'} ml={3} >200</Text>
              <Text color={'gray'} ml={1}>Following</Text>
              </Box>
            </Box>
        </Box>
        </>
    )
}