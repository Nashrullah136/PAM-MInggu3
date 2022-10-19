import React from 'react';
import { Box, Spacer, Flex, HStack, Icon, Text, Center } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'

export class ScheduleItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Flex  shadow="3" bg="white" w="100%" h="125px" p="4" borderRadius="sm" key={this.props.key} marginBottom={2}>
                <HStack space={4}>
                    <Text fontSize="md">
                        {`${this.props.data.bandara_keberangkatan}`}
                    </Text>
                    {/* <Spacer/> */}
                    <Text fontSize="md">
                        {` - `}
                    </Text>
                    {/* <Spacer/> */}
                    <Text fontSize="md">
                        {`${this.props.data.bandara_tujuan}`}
                    </Text>
                </HStack>
                <Spacer/>
                <Flex direction='row' alignContent="center">
                    <HStack alignContent="space-between">
                        <Icon as={MaterialIcons} name="flight" color="green.500" mr={2} size={8}/>
                        <Text fontSize="xl" alignSelf="center">{this.props.data.maskapai.maskapai_nama}</Text>
                    </HStack>
                    <Spacer/>
                    <Text fontSize="md" alignSelf="center" mr={4}>{(new Date(this.props.data.jadwal)).toISOString().slice(0, 10)}</Text>
                </Flex>
            </Flex>
            // <Flex direction="row" shadow="3" bg="white" w="100%" h="125px" p="4" borderRadius="sm" key={this.props.key} marginBottom={2}>
            //     <Flex>
            //         <Text fontSize="md">
            //             {this.props.data.bandara_keberangkatan}
            //         </Text>
            //         <Spacer />
            //         <HStack alignContent="space-between">
            //             <Icon as={MaterialIcons} name="flight" color="green.500" mr={2} size={8} />
            //             <Text fontSize="xl" alignSelf="center">{this.props.data.maskapai.maskapai_nama}</Text>
            //         </HStack>
            //     </Flex>
            //     <Spacer />
            //     <Text fontSize="md">
            //         -
            //     </Text>
            //     <Spacer />
            //     <Flex>
            //         <Text fontSize="md">
            //             {this.props.data.bandara_tujuan}
            //         </Text>
            //         <Spacer />
            //         <Box h={8}>
            //             <Text fontSize="md" marginY="auto">
            //                 {(new Date(this.props.data.jadwal)).toISOString().slice(0, 10)}
            //             </Text>
            //         </Box>
            //     </Flex>
            // </Flex>
        );
    }
}