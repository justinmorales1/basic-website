import React from 'react';
import { Field, reduxForm } from 'redux-form'
import FormFields from "./FormFields";


class ThirdPartyForms extends React.Component {
    render() {
        return (
            <FormFields pageName='Third Party Forms' name='Third Party Name'/>
        )
    }
}


export default reduxForm({
    form: 'ThirdPartyForms'
})(ThirdPartyForms)