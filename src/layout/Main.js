import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Header from '../pages/Shared/Header';
import Sidebar from '../pages/Shared/Sidebar';
import './Main.css';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='layout my-2'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;