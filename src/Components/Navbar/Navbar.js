import { Box, Button, Divider, ListItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { FlexBox } from '../MuiStyled/FlexBox/FlexBox';
import DarkLightSwitch from '../MuiStyled/Switch/Switch';


const Navbar = () => {


    return (
        <FlexBox justifyContent='space-between' sx={{padding:'5px 20px'}}>

            <FlexBox sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="" />
                    <Typography variant='h4' component='h1' sx={{ color: '#FFFFFF' }}>
                        Hexageo.io
                    </Typography>
            </FlexBox>

            <FlexBox>
                <Button>Overview</Button>
                <Button>Profitability Calculator</Button>
                <Button>How it works</Button>
                <Button>FAQ</Button>
                <Button>Contact</Button>
            </FlexBox>

            <FlexBox>
                <DarkLightSwitch></DarkLightSwitch>
                <Button>Log In</Button>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Button>Sign Up</Button>
            </FlexBox>
        </FlexBox>
    );
};

export default Navbar;