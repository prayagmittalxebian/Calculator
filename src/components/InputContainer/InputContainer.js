import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Button } from 'react-native';

class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            calcInput: [
                { key: '0', value: '0' },
                { key: 'dot', value: "." },
                { key: 'isEqual', value: "=" },
                { key: 'plus', value: "+" },
                { key: '1', value: "1" },
                { key: '2', value: "2" },
                { key: '3', value: "3" },
                { key: 'minus', value: "-" },
                { key: '4', value: "4" },
                { key: '5', value: "5" },
                { key: '6', value: "6" },
                { key: 'multiple', value: "*" },
                { key: '7', value: "7" },
                { key: '8', value: "8" },
                { key: '9', value: "9" },
                { key: 'divide', value: "/" },
            ]
        }
    }

    keyInput = (input) => {
        this.props.keyInput(input);

    }

    render() {
        return (
            <View style={styles.inputContainer}>
                {this.state.calcInput.map(input => {
                    return (
                        <View style={styles.textBorder}><Text key={input.key} onPress={() => this.keyInput(input)}>{input.value}</Text></View>
                    );
                })}
            </View>
        );

    }
}

const styles = StyleSheet.create({

    textBorder: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default InputContainer;