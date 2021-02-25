import { Field, reduxForm } from 'redux-form'



const MemberForms =  (props) => {
    const {handleSubmit} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h2> Member Forms </h2>
                    <div>
                        <label>Name</label>
                        <Field
                            name="name"
                            type="text"
                            component="input"
                            label="nname"
                            placeholder=" Name"
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
};

export default reduxForm({
    form: 'memberForms'
})(MemberForms)



