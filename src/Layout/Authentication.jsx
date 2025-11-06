import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;