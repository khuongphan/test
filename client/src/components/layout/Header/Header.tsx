import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className="navbar">
            TEST
            <Link to="/Products">Products</Link>
            <Link to="/Cart">Cart</Link>
        </div>
    );
}

export default Header;