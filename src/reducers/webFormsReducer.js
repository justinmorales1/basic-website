

export default (state = {}, action) => {
    switch(action.type) {
        case "FORMS" :
            return action.payload;
        default:
            return state;
    }
}