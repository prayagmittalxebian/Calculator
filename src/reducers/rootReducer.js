import { combineReducers } from 'redux';
import calcReducer from './calcReducer';

const appReducer = combineReducers({
    calc: calcReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;