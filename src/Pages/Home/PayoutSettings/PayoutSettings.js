import { Box, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

const PayoutSettings = () => {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('#345920', 237, '$2500', 37, 2),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      

    return (
        <Box sx={{ py: '100px' }}>
            <Typography variant='h3' align='center' color='primary' >
                <span style={{ color: '#A59263' }}>Payout</span> Settings
            </Typography>
            <TableContainer component={Paper} sx={{width:'60%', m:'50px auto', borderRadius:'10px', border:'2px solid #A59263'}}>
                <Table sx={{ minWidth: 650, background:'#515151' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{color:'#FFFFFF'}}>
                            <TableCell>Payout Order</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Payout Date</TableCell>
                            <TableCell align="right">#</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right"><Chip label="Completed" variant="outlined"  /></TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>   
        </Box>
    );
};

export default PayoutSettings;