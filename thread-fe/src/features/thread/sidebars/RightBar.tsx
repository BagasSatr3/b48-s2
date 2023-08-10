import { Image, Box, Button, Text } from "@chakra-ui/react"

export function RightBar() {
    return (
        <>
        <Box p={3} w={'30em'}>
        <Box backgroundColor={'blackAlpha.400'} rounded={'lg'}>
            <Text fontSize={'lg'} p={2} mx={1} color={'white'} fontWeight={'bold'}>My Profile</Text>
            <Image src="https://images.alphacoders.com/130/1306217.jpg"  m={3} objectFit={'cover'} rounded={'xl'} w={'27em'} h={'10em'}/>
            <Image src="https://images.alphacoders.com/130/1306217.jpg" ml={7} mt={-20} objectFit={'cover'} rounded={'full'} w={'7em'} h={'7em'}/>
            <Button display={'flex'} justifyContent={'end'} float={'right'} mr={7} mt={-15} rounded={'full'}>Edit Profile</Button>
            <Box p={4} mx={1}>
              <Text fontSize={'xl'}  color={'white'} fontWeight={'bold'}>Philia Gray</Text>
              <Text color={'gray'} fontWeight={'light'}>@Philia</Text>
              <Text color={'white'}>An android that keeps annoy Jude</Text>
              <Box display={'flex'} mt={2}>
              <Text color={'white'}>291</Text>
              <Text color={'gray'} ml={1}>Following</Text>
              <Text color={'white'} ml={3} >291</Text>
              <Text color={'gray'} ml={1}>Following</Text>
              </Box>
            </Box>
        </Box>
        
        <br />
        <Box backgroundColor={'blackAlpha.400'} rounded={'lg'}>
            <Box p={3}>
              <Text fontSize={'lg'} p={3} mx={1} color={'white'} fontWeight={'bold'}>My Profile</Text>
              <Box display={'flex'} >
                <Image src="https://images.alphacoders.com/130/1306217.jpg" mt={2} objectFit={'cover'} rounded={'full'} w={'50px'} h={'50px'}/>
                <Box display={'flex'} flexDirection={'column'} mt={3} ml={4} >
                  <Text color={'white'} >Indah Pra Karya</Text>
                  <Text fontSize={'md'} color={'gray'}>@indahpra</Text>
                </Box>
                  <Button rounded={'full'} m={2}>Follow</Button>
              </Box>
            </Box>
        </Box>
        
        <br />
        <Box backgroundColor={'blackAlpha.400'} rounded={'lg'}>
            <Box p={3}>
              <Text fontSize={'lg'} p={3} mx={1} color={'white'} fontWeight={'bold'}>My Profile</Text>
              <Box display={'flex'} >
                <Image src="https://images.alphacoders.com/130/1306217.jpg" mt={2} objectFit={'cover'} rounded={'full'} w={'50px'} h={'50px'}/>
                <Box display={'flex'} flexDirection={'column'} mt={3} ml={4} >
                  <Text color={'white'} >Indah Pra Karya</Text>
                  <Text fontSize={'md'} color={'gray'}>@indahpra</Text>
                </Box>
                  <Button rounded={'full'} m={2}>Follow</Button>
              </Box>
            </Box>
        </Box>

      </Box>
      </>
    )
}