import axios from 'axios';

export const submitForms = (data) => async (dispatch) => {
    let response = await axios.post('/some/url/here');

    dispatch({
        type: "USER_FORM",
        payload: response.data
    })
};

