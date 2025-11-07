import React from 'react';
import Header from '../component/Header';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../component/Loading';
import Footer from '../component/Footer';

const Root = () => {
    const { state } = useNavigation();
    return (
        <div>
            <Header></Header>

            {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}

            <div className='mt-20'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;