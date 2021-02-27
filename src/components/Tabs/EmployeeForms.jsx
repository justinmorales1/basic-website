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
                    <label>Employee Id</label>
                    <Field
                        name="employeeId"
                        type="text"
                        component="input"
                        label="Employee Id"
                        placeholder="Employee Id"
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
                    <button type="submit" className="btn waves-effect waves-light right">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'employeeForm' // a unique identifier for this form
})(EmployeeForms)