import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage'
import MemberForms from './components/Tabs/MemberForms';
import EmployeeForms from './components/Tabs/EmployeeForms';
import ThirdPartyForms from './components/Tabs/ThirdPartyForms';
import ReviewForms from "./components/Tabs/ReviewForms";


class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={LandingPage}/>
                        <Route exact path='/employees-forms' component={EmployeeForms}/>
                        <Route exact path='/member-forms' component={MemberForms}/>
                        <Route exact path='/third-party-forms' component={ThirdPartyForms}/>
                        <Route exact path='/review-forms' component={ReviewForms}/>
                    </Switch>
                </BrowserRouter >
            </div>
        )
    }
}

export default App;