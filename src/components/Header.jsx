import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link to='/' className="brand-logo"> BWA - BasicWebApp </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to='/employees-forms'>Employee Forms</Link></li>
                            <li><Link to='/third-party-forms'>Third Party Forms</Link></li>
                            <li><Link to='/member-forms'>Member Forms</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;