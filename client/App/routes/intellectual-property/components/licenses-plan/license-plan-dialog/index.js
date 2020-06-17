import React from 'react';
import useStyles from './license-plan-dialog.css';
import { Dialog, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

export default (props) => {
    const classes = useStyles();
    const { onClose, open } = props;

    const createData = (min, max, type, price) => {
        return { min, max, type, price };
    }

    const rows = [
        createData(100, 200, "סרטון", 50 ),
        createData(201, 300, "סרטון", 60 ),
        createData(301, 400, "סרטון", 70 ),
        createData(401, 500, "סרטון", 80 ),
        createData(501, 600, "סרטון", 90 ),
    ];

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
                        {rows.map((row) => (
                            <TableRow key={row.min}>
                                <TableCell align="right">{row.min} - {row.max}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
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