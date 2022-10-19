import React from "react";
import { InputDateForm } from './InputDateForm'
import { InputTextForm } from "./InputTextForm";
import { Flex, Box, Text, VStack, Button } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export class SearchFormClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bandara_kode_keberangkatan: "",
            bandara_kode_tujuan: "",
            jadwal: this.extractDateOnly(''),
        };
        this.onChangeDestiny = this.onChangeDestiny.bind(this);
        this.onChangeOrigin = this.onChangeOrigin.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.searchScedhule = this.searchScedhule.bind(this);
    }

    extractDateOnly(date) {
        if (date) {
            return ((new Date(date)).toISOString().slice(0, 10));
        }
        return ((new Date()).toISOString().slice(0, 10));
    }

    onChangeOrigin(origin) {
        this.setState({ bandara_kode_keberangkatan: origin });
    }

    onChangeDestiny(destiny) {
        this.setState({ bandara_kode_tujuan: destiny });
    }

    onChangeDate(date) {
        this.setState({ jadwal: this.extractDateOnly(date) });
        console.log("change Date")
        console.log(this.state);
    }

    searchScedhule(){
        this.props.navigation.navigate('Schedule', {data: this.state});
    }

    render() {
        return (
            <Flex alignContent="space-between" bg="white" direction="row" shadow="2" w="100%" px="8" py="8" borderRadius="xl">
                <VStack space={4} w='100%'>
                    <Box>
                        <Text>
                            Lokasi Keberangkaan
                        </Text>
                        <InputTextForm icon={<MaterialIcons name='flight-takeoff' />} palceHolder='Masukkan Lokasi Keberangkatan'
                            onChangeValue={this.onChangeOrigin} />
                    </Box>
                    <Box>
                        <Text>
                            Lokasi Tujuan
                        </Text>
                        <InputTextForm icon={<MaterialIcons name='flight-land' />} palceHolder='Masukkan Lokasi Tujuan'
                            onChangeValue={this.onChangeDestiny} />
                    </Box>
                    <Box>
                        <Text>
                            Tanggal Keberangkatan
                        </Text>
                        <InputDateForm onChangeValue={this.onChangeDate} date={this.state.jadwal} />
                    </Box>
                    <Button size="md" colorScheme="orange" onPress={this.searchScedhule}>Cari</Button>
                </VStack>
            </Flex>
            // <Container maxWidth="xs">
            //     <Paper elevation={10}>
            //         <Stack px={4} py={2} spacing={2}>
            //             <Box fontSize={"small"}>
            //                 <Typography variant="subtitle1">Lokasi Keberangkatan</Typography>
            //                 <InputTextForm value={this.state.origin} icon={iconOrigin} onChangeValue={this.onChangeOrigin} />
            //             </Box>
            //             <Box>
            //                 <Typography variant="subtitle1">Lokasi Tujuan</Typography>
            //                 <InputTextForm value={this.state.destiny} icon={iconDestiny} onChangeValue={this.onChangeDestiny} />
            //             </Box>
            //             <Box>
            //                 <Typography variant="subtitle1">Tanggal Keberangkatan</Typography>
            //                 <InputDateForm value={this.state.date} onChangeValue={this.onChangeDate} />
            //             </Box>
            //         </Stack>
            //     </Paper>
            // </Container>
        );
    }
}

export function SearchForm(props) {
    const navigation = useNavigation();

    return <SearchFormClass {...props} navigation={navigation} />
}