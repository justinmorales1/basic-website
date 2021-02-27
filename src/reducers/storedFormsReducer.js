import {USER_FORM} from "../constants/actionConstants";


export default (state = [], action) => {
    switch (action.type) {
        case USER_FORM:
            return action.payload;
        default:
            return state;
    }
}