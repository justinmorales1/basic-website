import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from "redux-form";
import { submitForm } from '../../actions/submitFormsAction';
import { retrieveForms } from '../../actions/httpRequests';


class ReviewForms extends React.Component {
    componentDidMount() {
        this.props.retrieveForms();
    }

    renderList = () => {
        return this.props.storedForms.map( (employees, index) => {
            return (
                //value doesnt accept a plan object. You need to stringffy it or redux form will show value as [object, Object]
                <option key={index} value={JSON.stringify(employees)}> {employees.name} </option>
            )
        })
    };

    //When you select an option from the select element this will set the input fields to a new value
    updateFields = (e) =>{
        const employeeData = JSON.parse(e.target.value);

        this.setState(() => {
            this.props.change("name", employeeData.name);
            this.props.change("employeeId", employeeData.employeeId);
            this.props.change("age", employeeData.age);
        });
    };


    render() {
        const {handleSubmit} = this.props;

        return (
                <form onSubmit={handleSubmit((formValues)=> this.props.submitForm(formValues))}>
                    <div className="container">
                        <label> Select A Form </label>
                        <Field name="formSelect" component="select" className='browser-default' onChange={this.updateFields}>
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
        userForms: state.userForms,
        storedForms: state.storedForms
    }
};

ReviewForms = connect(mapStateToProps,{submitForm, retrieveForms})(ReviewForms);


export default reduxForm({
    form: 'reviewForms',
    destroyOnUnmount : true
})(ReviewForms)

