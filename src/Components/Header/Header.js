import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    
    render () {
        return (
            <header>
                <div className="content">
                    <div className="title">AReallyCoolLogo</div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/store"}>Storefront</Link>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;