import { Box, Text, Flex, Image, Stack, HStack, VStack, Button, WrapItem, Center, Grid, GridItem, Container  } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export function NavRight() {
    return (
        <Grid>
            <GridItem backgroundColor='gray.600' >
                <GridItem>
                    <Text color="cyan" fontSize='4xl'>Setsu</Text>
                </GridItem>
                <GridItem >
                    <NavLink to="/">Home</NavLink>
                </GridItem>
                <GridItem>
                    <NavLink to="profile">Profile</NavLink>
                </GridItem>
            </GridItem>
        </Grid>
    )
}