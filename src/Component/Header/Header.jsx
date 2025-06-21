import React from 'react';
import { Outlet } from 'react-router';

const Header = () => {
    return (
        <div>
         <h3>This is header </h3>
         <nav>
            <a href="/">Home</a>
            <a href="/">Mobule</a>
            <a href="/">Leptop</a>
            <a href="/">Jakia</a>
         </nav>
            
        </div>
    );
};

export default Header;