import { Field, reduxForm } from 'redux-form'

const EmployeeForms  = (props) => {
    const { handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
            <div>
                <label>First Name</label>
                <Field
                    name="username"
                    type="text"
                    component="input"
                    label="Username"
                    placeholder="First Name"
                    style={{marginBottom: '20px'}}
                />
            </div>
            <div>
                <label>Email</label>
                <Field
                    name="email"
                    type="text"
                    component="input"
                    label="Email"
                    placeholder="Email"
                    style={{marginBottom: '20px'}}/>
            </div>
            <div>
                <label>Age</label>
                <Field
                    name="age"
                    type="text"
                    component="input"
                    label="Age"
                    placeholder="Age"
                    style={{marginBottom: '20px'}}/>
            </div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'employeeForm' // a unique identifier for this form
})(EmployeeForms)