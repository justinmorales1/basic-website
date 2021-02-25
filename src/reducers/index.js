import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import basicReducer from './basicReducer'

export default combineReducers({
    form: formReducer,
    basic: basicReducer
})