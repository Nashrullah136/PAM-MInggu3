import { View } from "react-native";
import Paper from '@mui/material/Paper';
import React from "react";
import { Container, Stack, Typography, Button, Box } from "@mui/material";
import { InputTextForm } from "./InputTextForm";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { green } from '@mui/material/colors';
import { InputDateForm } from './InputDateForm'

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        let todayDate = ((new Date()).toISOString().slice(0, 10)).split("-").reverse().join("-");
        this.state = {
            origin: "Masukkan lokasi keberangkatan",
            destiny: "Masukkan lokasi tujuan",
            date: todayDate,
        }
        this.onChangeDestiny = this.onChangeDestiny.bind(this);
        this.onChangeOrigin = this.onChangeOrigin.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
    }

    onChangeOrigin(origin) {
        this.setState({ origin: origin });
    }

    onChangeDestiny(destiny) {
        this.setState({ destiny: destiny });
    }

    onChangeDate(date) {
        this.setState({ date: date });
    }



    render() {
        let iconOrigin = () => {
            return (<FlightTakeoffIcon sx={{ color: green[500] }} />);
        };

        let iconDestiny = () => {
            return (
                <FlightLandIcon sx={{ color: green[500] }} />
            );
        };
        return (
            
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
            // </Container>);
    }
}