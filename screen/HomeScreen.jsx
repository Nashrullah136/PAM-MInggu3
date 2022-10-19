import React from "react";
import { SearchForm } from '../components/SearchForm';
import { Center, Container, ZStack, Text, Flex, Box } from 'native-base'

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
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
        </>
        );
    }
}