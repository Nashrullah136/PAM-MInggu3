import { StyleSheet, View, Text, FlatList } from 'react-native';
import React from 'react';
import { ScheduleItem } from './ScheduleItem';

export class ScheduleList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={this.props.schedules}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ScheduleItem data={item}/>}
                style={{width: '100%'}}/>
        );
    }
}