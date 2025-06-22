import React from 'react';
import { Link, Outlet } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
         <h3>This is header </h3>
         <nav>
            <Link to="/" >Home</Link>
            <Link to="/mobule" >Module</Link>
            <Link to="/leptop" >Leptop</Link>
            <Link to="/" >Home</Link>
         </nav>
            
        </div>
    );
};

export default Header;