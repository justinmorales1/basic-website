import { Field, reduxForm } from 'redux-form'
import React from 'react';
import FormFields from "./FormFields";



class MemberForms extends React.Component {
    render() {
        return (
            <div>
                <FormFields pageName='Member Forms' name='Member Name'/>
            </div>
        )
    }
};

export default reduxForm({
    form: 'memberForms'
})(MemberForms)



