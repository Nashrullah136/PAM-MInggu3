import React from 'react';
import { Input, Icon } from 'native-base'

export class InputTextForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(changedText) {
        this.props.onChangeValue(changedText);
    }

    render() {
        return (
            <Input
                w="100%"
                InputLeftElement={
                    <Icon
                        as={this.props.icon}
                        size={5}
                        ml="2"
                        color="green.400"
                    />
                }
                placeholder={this.props.placeHolder}
                onChangeText={this.onChange}
            />
        )
    }
}