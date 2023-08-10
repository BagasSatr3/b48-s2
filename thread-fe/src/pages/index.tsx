import {Box,} from "@chakra-ui/react"
import {RightBar, LeftBar} from '../features/thread'
import { Outlet } from "react-router-dom"
export function Pages() {
    return (
        <>
        <Box backgroundColor={'blackAlpha.900'} display={'flex'} >
           <Box  w="75%">

            <LeftBar/>

           </Box>
           <Box  w="100%">

            <Outlet/>

           </Box>
           <Box w="100%">

            <RightBar/>

           </Box>
        </Box>
        </>
    )
}