import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo"> Nocona </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a >Tables</a></li>
                            <li><a >Reports</a></li>
                            <li><a >Other</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;