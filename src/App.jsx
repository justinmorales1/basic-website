import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage'
import MemberForms from './components/TabTwo/MemberForms';
import EmployeeForms from './components/TabOne/EmployeeForms';
import ThirdPartyForms from './components/TabThree/ThirdPartyForms';


class App extends React.Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <Header/>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/employees-forms' component={EmployeeForms}/>
                    <Route exact path='/member-forms' component={MemberForms}/>
                    <Route exact path='/third-party-forms' component={ThirdPartyForms}/>
                </BrowserRouter >
            </div>
        )
    }
}

export default App;