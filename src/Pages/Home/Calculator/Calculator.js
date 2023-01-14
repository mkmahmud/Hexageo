import { Button, Card, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Calculator = () => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (

        <Box sx={{ my: '100px' }}>
            <Typography variant='h3' align='center' color='primary' >
                Profitability <span style={{ color: '#A59263' }}>Calculator</span>
            </Typography>
            <Card sx={{ maxWidth: 500, m: '50px auto', background: '#101010', color: '#FFFFFF', p: '20px', textAlign: 'left' }}>
                <Typography variant='h6' paddingY={4}>
                    Mining Profitability Calculator
                </Typography>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" >Select Hardware</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}

                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <Typography variant='h6' mt={3} mb={1}>
                        Monthly cost per unlimited data sim
                    </Typography>
                    <FormControl fullWidth>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="$0.000"
                            multiline
                            maxRows={4}

                        />
                    </FormControl>
                </Box>
                <Box>
                    <Typography variant='h6' mt={3} mb={1}>
                        Choose coin to be mined
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" >Select Coin</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}

                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box textAlign='center' paddingY={10}>
                    <Typography variant='p' mt={3} mb={1}>
                        Estimated Coin Earnings
                    </Typography>
                    <Typography variant='h4' color='#A59263' mt={3} mb={1}>
                        $ 1,600 / Month
                    </Typography>
                </Box>
                <Box sx={{textAlign:'center'}}>
                    <Button variant='outlined' sx={{ borderRadius:'50px', padding:'10px 50px', color:'#A59263'}} color='secondary'>
                        Pay
                    </Button>
                </Box>
            </Card>
        </Box>
    );
};

export default Calculator;