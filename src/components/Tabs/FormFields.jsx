import React from 'react';
import {Field} from "redux-form";


const FormFields = (props) => {
    const {handleSubmit} = props;

    //Simple example of sending data back to parent component uncomment here and the button below if you want to use it.
    // const sendToParentComponent = (someValue) => {
    //     props.getChildValue(someValue)
    // };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h2> {props.pageName} </h2>
                    <div>
                        <label>{props.name}</label>
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
            {/*<button type="submit" className="btn waves-effect waves-light right" onClick={()=>sendToParentComponent(100)}>*/}
            {/*    Click Me*/}
            {/*    <i className="material-icons right">send</i>*/}
            {/*</button>*/}
        </div>
    )
};

export default FormFields