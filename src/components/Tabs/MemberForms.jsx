import { Field, reduxForm } from 'redux-form'
import React from 'react';

class MemberForms extends React.Component {
    //This class component is showing an example of not Keeping it dry and having to re code buttons
    //that are already available in the FormFields component.
    handle = () => {
        console.log("handleSubmit")
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handle)}>
                    <div className="container">
                        <h2> Member Forms </h2>
                        <div>
                            <label>Member Name</label>
                            <Field
                                name="thirdPartyName"
                                type="text"
                                component="input"
                                label="Username"
                                placeholder="Third Party Name"
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
                            <label>Address</label>
                            <Field
                                name="address"
                                type="text"
                                component="input"
                                label="adress"
                                placeholder="Adress"
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
};

export default reduxForm({
    form: 'memberForms'
})(MemberForms)



