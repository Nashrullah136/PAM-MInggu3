import React from "react";
import { SearchForm } from '../components/SearchForm';
import { Center, Container } from 'native-base'

export class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Center flex={1} safeArea>
            <Container bg="white"  borderRadius="xl">
                <SearchForm />
            </Container>
        </Center>);
    }
}