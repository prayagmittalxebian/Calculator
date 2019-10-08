import * as types from './../constants/actionTypes';


const initialState = {
    input: {},
    value: 0,
    newValue: 0,
    operator: null,
    result: 0
}
export default calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INPUT:
            return {
                ...state,
                value: state.value === 0 ? action.input.value : state.operator === null ? `${state.value}${action.input.value}` : state.value,
                result: state.value === 0 ? action.input.value : state.operator === null ?
                    `${state.value}${action.input.value}` : action.input.value,
                newValue: state.operator === null ? state.newValue : action.input.value
            }
        case types.OPERATOR:
            return {
                ...state,
                operator: action.input.key
            }

        case types.RESET:
            return {
                ...state,
                result: 0,
                value: 0,
                newValue: 0,
                operator: null
            }
        case types.CALCULATE:
            return {
                ...state,
                result: action.result,
                value: action.result,
                operator: null
            }
        default:
            return state;
    }
}