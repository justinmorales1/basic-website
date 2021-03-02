import axios from 'axios';

export const retrieveForms = () => async (dispatch) => {
    const response = await axios.get('http://localhost:5000/form/retrieve/all');

    //Mocking the HTTP response to get some form data that would be posted on the backend.
    // const response = [
    //     {name: 'Twirling Derbishes', employeeId: 1123123234, age: 29},
    //     {name: 'Way Word', employeeId: 1234234345, age: 28},
    //     {name: 'Thomas Drew', employeeId: 121453453423123456, age: 12},
    //     {name: 'Kin Derby', employeeId: 1231232456, age: 54},
    //     {name: 'Max Million', employeeId: 1123456, age: 34},
    //     {name: 'Millie Mercy', employeeId: 123456789, age: 45},
    // ];

    console.log(response)
    dispatch({
        type: "USER_FORM",
        payload: response.data
    })


};

