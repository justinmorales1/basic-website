import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import basicReducer from './basicReducer';
import webFormsReducer from './webFormsReducer';
import authReducer from './authReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    reviewForms: webFormsReducer,
    basic: basicReducer
})