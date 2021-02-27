import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import webFormsReducer from './webFormsReducer';
import authReducer from './authReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    webFormsReducer,
})