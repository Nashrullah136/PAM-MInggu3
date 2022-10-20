import React from "react";
import { SearchForm } from '../components/SearchForm';
import { Center, Container, ZStack, Text, Flex, Box, Spacer } from 'native-base'

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Flex h='full'>
                <Box w='full' >
                    <Center w='full' >
                        <Container>
                            <Box w='100%'>
                                <Text alignSelf={'center'} fontSize='4xl' color='white' mb='5'>Hiling.id</Text>
                                <SearchForm />
                            </Box>
                        </Container>
                    </Center>
                    <Box w='full' h='85%' borderBottomRadius='md' zIndex={-1} bg='lime.500' position='absolute' />
                </Box>
                <Spacer />
                <Box w='100%' mb={5}>
                    <Text alignSelf={'center'} fontSize='xl' color='gray.400'>Copyright M.Nashrullah-118140136</Text>
                </Box>
            </Flex>
        );
    }
}