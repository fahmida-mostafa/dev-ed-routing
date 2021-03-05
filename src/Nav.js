import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/about">
                    <li style={navStyle}>About</li>
                </Link>
                <Link to="/shop">
                    <li style={navStyle}>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}
 
export default Nav;