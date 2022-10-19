import React from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Input, Icon, Pressable } from 'native-base'
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export class InputDateForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.showDatePicker = this.showDatePicker.bind(this);
    }

    handleChange(event, selectedDate) {
        if(event.type === 'set'){
            const date = selectedDate;
            console.log(date, event);
            this.props.onChangeValue(date);
        }
    }

    showDatePicker() {
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange: this.handleChange,
            mode: 'date',
            is24Hour: true,
        });
    }

    render() {
        return (
            <Pressable onPress={this.showDatePicker} >
                <View>
                    <Input
                        w="100%"
                        InputLeftElement={
                            <Icon
                                as={<AntDesign name='calendar' />}
                                size={5}
                                ml="2"
                                color="green.400"
                            />
                        }
                        isDisabled
                        value={this.props.date}
                    />
                </View>
            </Pressable>
        )
    }
}

