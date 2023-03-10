import { Container } from '@mui/material';
import React from 'react';
import Calculator from './Calculator/Calculator';
import Hero from './Hero/Hero';
import PayoutSettings from './PayoutSettings/PayoutSettings';

const Home = () => {
    return (
        <div style={{background:'#000000', color:'white'}} >
            <Hero></Hero>
            <Calculator></Calculator>
            <PayoutSettings></PayoutSettings>
        </div>
    );
};

export default Home;