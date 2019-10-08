import * as types from './../constants/actionTypes';

export function setInput(input) {
    return dispatch => {
        dispatch({ type: types.INPUT, input });
    }
}

export function keyOperator(input) {
    return dispatch => {
        dispatch({
            type: types.OPERATOR, input
        });
    }
}

export function reset() {
    return dispatch => {
        dispatch({
            type: types.RESET
        });
    }
}

export function calculate(result) {
    return dispatch => {
        dispatch({
            type: types.CALCULATE, result
        });
    }
}