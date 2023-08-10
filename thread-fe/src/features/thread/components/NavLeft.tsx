import { Box, Text, Flex, Image, Stack, HStack, VStack, Button, WrapItem, Center, Grid, GridItem, Container  } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export function NavLeft() {
    return (
        <Box p={4} backgroundColor='gray.600'>
            <Grid>
            <GridItem  >
                <GridItem>
                    <Text color="green.200" fontSize='4xl'>Setsu</Text>
                </GridItem>
               <Box m={6}>
               <GridItem>
                    <NavLink to="/"><Text color="white">Home</Text></NavLink>
                </GridItem>
                <GridItem>
                    <NavLink to="search"><Text color="white">Search</Text></NavLink>
                </GridItem>
                <GridItem>
                    <NavLink to="follow"><Text color="white">Follow</Text></NavLink>
                </GridItem>
                <GridItem>
                    <NavLink to="profile"><Text color="white">Profile</Text></NavLink>
                </GridItem>
               </Box>
            </GridItem>
        </Grid>
        </Box>
    )
}