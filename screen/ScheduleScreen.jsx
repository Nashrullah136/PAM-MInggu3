import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ScheduleList } from '../components/ScheduleList';
import { Center, Container, Box, Text, Flex, Spacer } from 'native-base'

export class ScheduleScreen extends React.Component {
    schedules = [
        { schedule_id: 1, bandara_kode_keberangkatan: 'CGK', bandara_kode_tujuan: 'BTH', maskapai_id: 1, jadwal: '2022-10-12T10:45:00.000+07:00' },
        { schedule_id: 2, bandara_kode_keberangkatan: 'PLM', bandara_kode_tujuan: 'BTH', maskapai_id: 2, jadwal: '2022-10-12T11:00:00.000+07:00' },
        { schedule_id: 3, bandara_kode_keberangkatan: 'BTH', bandara_kode_tujuan: 'PLM', maskapai_id: 3, jadwal: '2022-10-12T11:15:00.000+07:00' },
        { schedule_id: 4, bandara_kode_keberangkatan: 'BTH', bandara_kode_tujuan: 'CGK', maskapai_id: 4, jadwal: '2022-10-12T12:15:00.000+07:00' },
        { schedule_id: 5, bandara_kode_keberangkatan: 'CGK', bandara_kode_tujuan: 'PLM', maskapai_id: 5, jadwal: '2022-10-12T11:30:00.000+07:00' },
        { schedule_id: 6, bandara_kode_keberangkatan: 'PLM', bandara_kode_tujuan: 'CGK', maskapai_id: 1, jadwal: '2022-10-12T11:20:00.000+07:00' },
        { schedule_id: 7, bandara_kode_keberangkatan: 'CGK', bandara_kode_tujuan: 'BTH', maskapai_id: 1, jadwal: '2022-10-12T10:45:00.000+07:00' },
        { schedule_id: 8, bandara_kode_keberangkatan: 'PLM', bandara_kode_tujuan: 'BTH', maskapai_id: 2, jadwal: '2022-10-12T11:00:00.000+07:00' },
        { schedule_id: 9, bandara_kode_keberangkatan: 'BTH', bandara_kode_tujuan: 'PLM', maskapai_id: 3, jadwal: '2022-10-12T11:15:00.000+07:00' },
        { schedule_id: 10, bandara_kode_keberangkatan: 'BTH', bandara_kode_tujuan: 'CGK', maskapai_id: 4, jadwal: '2022-10-12T12:15:00.000+07:00' },
        { schedule_id: 11, bandara_kode_keberangkatan: 'CGK', bandara_kode_tujuan: 'PLM', maskapai_id: 5, jadwal: '2022-10-12T11:30:00.000+07:00' },
        { schedule_id: 12, bandara_kode_keberangkatan: 'PLM', bandara_kode_tujuan: 'CGK', maskapai_id: 1, jadwal: '2022-10-12T11:20:00.000+07:00' },
        { schedule_id: 13, bandara_kode_keberangkatan: 'CGK', bandara_kode_tujuan: 'BTH', maskapai_id: 1, jadwal: '2022-10-12T10:45:00.000+07:00' },
        { schedule_id: 14, bandara_kode_keberangkatan: 'PLM', bandara_kode_tujuan: 'BTH', maskapai_id: 2, jadwal: '2022-10-12T11:00:00.000+07:00' },
        { schedule_id: 15, bandara_kode_keberangkatan: 'BTH', bandara_kode_tujuan: 'PLM', maskapai_id: 3, jadwal: '2022-10-12T11:15:00.000+07:00' },
        { schedule_id: 16, bandara_kode_keberangkatan: 'BTH', bandara_kode_tujuan: 'CGK', maskapai_id: 4, jadwal: '2022-10-12T12:15:00.000+07:00' },
        { schedule_id: 17, bandara_kode_keberangkatan: 'CGK', bandara_kode_tujuan: 'PLM', maskapai_id: 5, jadwal: '2022-10-12T11:30:00.000+07:00' },
        { schedule_id: 18, bandara_kode_keberangkatan: 'PLM', bandara_kode_tujuan: 'CGK', maskapai_id: 1, jadwal: '2022-10-12T11:20:00.000+07:00' },
    ];

    airline = {
        1: { maskapai_id: 1, maskapai_nama: 'Super Air Jet', maskapai_logo: '' },
        2: { maskapai_id: 2, maskapai_nama: 'Wings Air', maskapai_logo: '' },
        3: { maskapai_id: 3, maskapai_nama: 'Citilink', maskapai_logo: '' },
        4: { maskapai_id: 4, maskapai_nama: 'Garuda Indonesia', maskapai_logo: '' },
        5: { maskapai_id: 5, maskapai_nama: 'Lion Air', maskapai_logo: '' },
    };

    airport = {
        CGK: { bandara_kode: 'CGK', bandara_nama: 'Jakarta Soekarno Hatta International Airport' },
        PLM: { bandara_kode: 'PLM', bandara_nama: 'Palembang International Airport' },
        BTH: { bandara_kode: 'BTH', bandara_nama: 'Batam Hang Nadim Airport' },
    };

    constructor(props) {
        super(props);
        console.log("scheduleScreen Params");
        console.log(this.props.route.params);
        var filteredSchedules = this.props.route.params ? this.filterData(this.schedules, this.props.route.params.data) : this.schedules;
        this.state = {
            detailSchedule: this.detailSchedule(filteredSchedules)
        };
    }


    filterData(schedules, dataFilter) {
        return schedules.filter(data => {
            return data.bandara_kode_keberangkatan === dataFilter.bandara_kode_keberangkatan
                && data.bandara_kode_tujuan === dataFilter.bandara_kode_tujuan
                && this.isItInTheSameDate(data.jadwal, dataFilter.jadwal);
        });
    }

    isItInTheSameDate(date1, date2) {
        date1 = new Date(date1);
        date2 = new Date(date2);
        return date1.toISOString().slice(0, 10) === date2.toISOString().slice(0, 10);
    }

    detailSchedule(filteredSchedule) {
        return filteredSchedule.map(schedule => {
            return {
                id: schedule.schedule_id,
                bandara_keberangkatan: schedule.bandara_kode_keberangkatan,
                bandara_tujuan: schedule.bandara_kode_tujuan,
                maskapai: this.airline[schedule.maskapai_id],
                jadwal: schedule.jadwal
            };
        });
    }

    render() {
        return (
            <Flex h='full'>
                <Box w='full'>
                    <Box w='100%' bg='lime.500' mb={5}>
                        <Text alignSelf={'center'} fontSize='xl' color='white'>Hasil Pencarian Penerbangan</Text>
                        <Text alignSelf={'center'} fontSize='xl' color='white' mb='4    '>
                            {this.props.route.params.data.jadwal}
                        </Text>
                    </Box>
                    <Center w='full'>
                        <Container w='full'>
                            <ScheduleList schedules={this.state.detailSchedule} />
                        </Container>
                    </Center>
                </Box>
                <Spacer />
                <Box w='100%' mb={5}>
                    <Text alignSelf={'center'} fontSize='xl' color='gray.400'>Copyright M.Nashrullah-118140136</Text>
                </Box>
            </Flex>
        );
    }
}