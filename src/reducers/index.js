import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import formsReducer from './formsReducer';
import authReducer from './authReducer';
import storedFormsReducer from './storedFormsReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    userForms: formsReducer,
    storedForms: storedFormsReducer
})