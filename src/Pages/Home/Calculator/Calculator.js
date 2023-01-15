import { Button, Card, FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Calculator = () => {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (

        <Box sx={{ py: '100px' }}>
            <Typography variant='h3' align='center' color='primary' >
                Profitability <span style={{ color: '#A59263' }}>Calculator</span>
            </Typography>
            <Card sx={{ maxWidth: 400, m: '50px auto', background: '#101010', color: '#FFFFFF', p: '20px', textAlign: 'left', borderRadius:'50px', border:'2px solid #A59263' }}>
                <Typography variant='h6' paddingY={4}>
                    Mining Profitability Calculator
                </Typography>
                <Box>
                    <FormControl sx={{ m: 1, width: '100%' }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Without label</FormHelperText>
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
                    <FormControl sx={{ m: 1, width: '100%' }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Without label</FormHelperText>
                    </FormControl>
                </Box>
                <Box textAlign='center' paddingY={5}>
                    <Typography variant='p' mt={3} mb={1}>
                        Estimated Coin Earnings
                    </Typography>
                    <Typography variant='h4' color='#A59263' mt={3} mb={1}>
                        $ 1,600 / Month
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Button variant='outlined' sx={{ borderRadius: '50px', padding: '10px 50px', color: '#A59263' }} color='secondary'>
                        Pay
                    </Button>
                </Box>
            </Card>
        </Box>
    );
};

export default Calculator;