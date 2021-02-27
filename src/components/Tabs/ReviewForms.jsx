import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from "redux-form";

const data = [
    {name: 'Twirling Derbishes', employeeId: 1123123234, age: 29},
    {name: 'Way Word', employeeId: 1234234345, age: 28},
    {name: 'Thomas Drew', employeeId: 121453453423123456, age: 12},
    {name: 'Kin Derby', employeeId: 1231232456, age: 54},
    {name: 'Max Million', employeeId: 1123456, age: 34},
    {name: 'Millie Mercy', employeeId: 123456789, age: 45},


];

class ReviewForms extends React.Component {

    renderList = () => {
        return data.map( (employees, index) => {
            return (
                //value doesnt accept a plan object. You need to stringffy it or redux form will show value as [object, Object]
                <option key={index} value={JSON.stringify(employees)}> {employees.name} </option>
            )
        })
    };

    render() {
        const {handleSubmit} = this.props;
        return (
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <label> Select A Form </label>
                        <Field name="formSelect" component="select" className='browser-default'>
                            <option> Select a form </option>
                            {this.renderList()}
                        </Field>

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
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reviewForms: state.reviewForms
    }
};

ReviewForms = connect(mapStateToProps)(ReviewForms);


export default reduxForm({
    form: 'reviewForms',
    enableReinitialize : true
})(ReviewForms)

