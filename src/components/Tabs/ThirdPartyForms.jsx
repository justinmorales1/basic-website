import React from 'react';
import { Field, reduxForm } from 'redux-form'
import FormFields from "./FormFields";


class ThirdPartyForms extends React.Component {
    //Example of setting react state
    state = {
        value: 0
    };

    //Pass this function as a prop to child component
    updateReactState = (value) => {
        this.setState({value})
    }

    render() {
        console.log(this.state.value)
        return (
            <FormFields pageName='Third Party Forms' name='Third Party Name' getChildValue={this.updateReactState}/>
        )
    }
}


export default reduxForm({
    form: 'ThirdPartyForms'
})(ThirdPartyForms)