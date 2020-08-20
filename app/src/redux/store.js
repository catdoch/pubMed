import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
const combinedReducer = combineReducers({ data: reducer });
const initialState = {
    data: {},
};
const store = createStore(
    combinedReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
