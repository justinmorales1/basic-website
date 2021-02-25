import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import basicReducer from './basicReducer';
import webFormsReducer from './webFormsReducer';

export default combineReducers({
    form: formReducer,
    webFormsReducer,
    basic: basicReducer
})