import React from 'react';
import Banner from '../Banner/Banner';
import BottomSection from './BottomSection';
import MiddleSection from './MiddleSection';
import Overview from './Overview';
import TopSection from './TopSection';
import Vehicles from './Vehicles';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopSection></TopSection>
            <Overview></Overview>
            <MiddleSection></MiddleSection>
            <Vehicles></Vehicles>
            <BottomSection></BottomSection>
        </div>
    );
};

export default Home;