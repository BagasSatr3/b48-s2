import { Box, Text, Spacer, Flex, Image, Stack, HStack, VStack, Button, WrapItem, Center, Grid, GridItem, Container  } from "@chakra-ui/react"
import { NavLink, Outlet } from "react-router-dom"
import { NavLeft } from "../features/thread";
import { NavRight } from "../features/thread";

export function SideNav() {
    return (
        <Flex>
            <Box w="20%">

            <NavLeft />

            </Box>
            <Spacer />
            <Box w="55%" backgroundColor='gray.600'>
            <main>

                <Outlet />

            </main>
            </Box>
        <Spacer />
            <Box w="25%">

            <NavRight />
            
            </Box>
        </Flex>
    )
}