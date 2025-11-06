import React from 'react';
import HeroSlide from '../component/HeroSlide';
import HomeCard from '../component/HomeCard';

const dynamicData = fetch('/data.json').then(res=> res.json());

const HomeInfo = () => {
    return (
        <div>
            <HeroSlide></HeroSlide>
            <HomeCard dynamicData={dynamicData}></HomeCard>
        </div>
    );
};

export default HomeInfo;