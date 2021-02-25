import React from 'react';
import { connect } from 'react-redux'

class LandingPage extends React.Component {
    render() {
        return (
            <div className="card darken-1">
                Landing Page
            </div>
        )
    }
}

export default connect()(LandingPage);