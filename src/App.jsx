import React from 'react';
import Header from './components/Header';
import Employees from './components/TabTwo/MemberForms';
import LaborQueries from './components/TabOne/EmployeeForms';
import ThirdPartyForms from './components/TabThree/ThirdPartyForms';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Employees/>
                <LaborQueries/>
                <ThirdPartyForms/>
            </div>
        )
    }
}

export default App;