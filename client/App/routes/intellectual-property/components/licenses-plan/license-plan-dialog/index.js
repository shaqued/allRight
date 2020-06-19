import React from 'react';
import useStyles from './license-plan-dialog.css';
import { Dialog, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

export default ({ onClose, open, priceRange }) => {
    const classes = useStyles();

    const handleClose = () => {
        onClose();
    };


    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">בחר רישיון מהרשימה:</DialogTitle>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">כמות קהל</TableCell>
                            <TableCell align="right">סוג מדיה</TableCell>
                            <TableCell align="right">מחיר</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {priceRange.map((row) => (
                            <TableRow key={row.min}>
                                <TableCell align="right">{row.rangeMin} - {row.rangeMax}</TableCell>
                                <TableCell align="right">{row.usageType}</TableCell>
                                <TableCell align="right">{row.price} ש"ח</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button color="primary">למעבר לחוזה</Button>
        </Dialog>
    );
}