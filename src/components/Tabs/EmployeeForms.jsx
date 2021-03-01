import { reduxForm } from 'redux-form';
import React from 'react';
import FormFields from "./FormFields";

class EmployeeForms  extends React.Component{
    render() {
        return (
            <div>
                <FormFields pageName='Employee Forms' name='Employee Name'/>
            </div>
        )
    }

}

export default reduxForm({
    form: 'employeeForm' // a unique identifier for this form
})(EmployeeForms)