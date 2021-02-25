import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo"> BWA - BasicWebApp </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a >TabOne</a></li>
                            <li><a >TabTwo</a></li>
                            <li><a >TabThree</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;