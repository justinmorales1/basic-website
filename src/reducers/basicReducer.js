

export default (state = {}, action) => {
    switch(action.type) {
        case "SOMETHING" :
            return action.payload
        default:
            return state
    }
}

