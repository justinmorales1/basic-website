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
                <Header/>
                <BrowserRouter>
                    <LandingPage exact path='/'/>
                    <EmployeeForms exact path='/employees-forms'/>
                    <MemberForms exact path='/member-forms'/>
                    <ThirdPartyForms exact path='/third-party-forms'/>
                </BrowserRouter >
            </div>
        )
    }
}

export default App;