import React from 'react';
import Header from './components/Header';
import Employees from './components/Tables/Employees';
import LaborQueries from './components/Reports/LaborQueries';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Employees/>
                <LaborQueries/>
            </div>
        )
    }
}

export default App;