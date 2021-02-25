import { Field, reduxForm } from 'redux-form'

const EmployeeForms  = (props) => {
    const { handleSubmit} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h2> Employee Forms </h2>
                <div>
                    <label>Employee Name</label>
                    <Field
                        name="name"
                        type="text"
                        component="input"
                        label="name"
                        placeholder="Employee Name"
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
                    <button type="submit" className="right">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'employeeForm' // a unique identifier for this form
})(EmployeeForms)