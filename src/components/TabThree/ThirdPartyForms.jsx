import { Field, reduxForm } from 'redux-form'


const ThirdPartyForms = (props) => {
    const {handleSubmit} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h2> Third Party Forms </h2>
                    <div>
                        <label>Third Party Name</label>
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
                    <button type="submit" className="right">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}


export default reduxForm({
    form: 'ThirdPartyForms'
})(ThirdPartyForms)