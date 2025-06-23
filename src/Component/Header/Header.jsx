import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
         <h3>This is header </h3>
         <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mobule'>Mobule</NavLink>
            <NavLink to='/leptop'>Leptop</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/users2'>Users2</NavLink>
         </nav>
            
        </div>
    );
};

export default Header;