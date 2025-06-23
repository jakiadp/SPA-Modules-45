import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../SideBar/Sidebar';

const Root = () => {
    return (
        <div>
         <Header></Header>
        <div className='root-main'> 
             <Sidebar></Sidebar>
         <Outlet></Outlet>
        </div>
         <Footer></Footer>
            
        </div>
    );
};

export default Root;