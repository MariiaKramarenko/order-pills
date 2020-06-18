import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import orderReducer from "./reducer";

const reducers = {
   // profilePage: orderReducer,
    form: formReducer
}

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;
