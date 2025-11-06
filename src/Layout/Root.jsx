import React from 'react';
import Header from '../component/Header';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../component/Loading';

const Root = () => {
    const {state} = useNavigation();
    return (
        <div>
            <Header></Header>
            
          {state == "loading"? <Loading></Loading>: <Outlet></Outlet> }  
        </div>
    );
};

export default Root;