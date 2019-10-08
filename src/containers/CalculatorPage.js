import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import InputContainer from './../components/InputContainer/InputContainer';
import * as actionCreators from './../actions/calcAction';

class CalculatorPage extends Component {
    constructor(props) {
        super(props);
    }

    keyInput = (input) => {
        if (input.key !== 'isEqual' && input.key !== 'plus' && input.key !== 'minus' && input.key !== 'multiple' && input.key !== 'divide') {
            this.props.dispatch(actionCreators.setInput(input));
        } else if (input.key === 'isEqual') {
            const result = this.performCalculation(this.props.calc.value, this.props.calc.operator, this.props.calc.newValue);
            this.props.dispatch(actionCreators.calculate(result));
        } else {
            this.props.dispatch(actionCreators.keyOperator(input));
        }
    }

    performCalculation = (value, operator, newValue) => {
        let result = 0;
        switch (operator) {
            case "plus":
                {
                    result = parseFloat(value) + parseFloat(newValue);
                    break;
                }
            case "minus":
                {
                    result = value - newValue;
                    break;
                }
            case "multiple":
                {
                    result = value * newValue;
                    break;
                }
            case "divide":
                {
                    result = value / newValue;
                    break;
                }
        }
        console.log("result", result);
        return result;
    }

    reset = () => {
        this.props.dispatch(actionCreators.reset());
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Calculator</Text>
                    <Text onPress={this.reset}>Reset</Text>
                </View>
                <Text style={styles.displayCalc}>{this.props.calc.result}</Text>
                <InputContainer keyInput={this.keyInput} />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    calc: state.calc
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textBorder: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'red',
        alignContent: 'center'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        flexDirection: 'row',

    },
    displayCalc: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(mapStateToProps)(CalculatorPage);