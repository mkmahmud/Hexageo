import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import backgroundImage from '../../../Assets/background 1.png'

const Hero = () => {
    return (
        <Container style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',

        }}
            sx={{
                padding: '100px 0px',
                textAlign: 'center'
            }}
        >
            <Box sx={{ my: '100px' }}>
                <Typography variant='h1' align='center' color='primary' >
                    Get <span style={{ color: '#A59263' }}>Hexageo Router |</span> <br /> With Us
                </Typography>
                <Typography variant='p' align='center' color='primary' >
                    Powerful Hexageo Router with fast speed to mine BTC or Litecoin...
                </Typography>
            </Box>
            <Box sx={{ my: '100px' }}>
                <Typography variant='h1' align='center' color='primary' >
                    <span style={{ color: '#A59263' }}>Overview</span>
                </Typography>
                <Box sx={{ width: '50%', margin: '50px auto' }}>
                    <Typography variant='p' align='center' color='primary' >
                        Mining hardware is high specialized computers used to mine Coins. The ASIC industry has become complex and competitive. Mining hardware is now only located where there is cheap electricity. When Satoshi released Bitcoin, he intended it to be mined on computer CPUs.
                    </Typography>
                </Box>

            </Box>
        </Container>
    );
};

export default Hero;