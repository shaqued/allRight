import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@material-ui/core';

export default ({ onClose, open, priceRange, setPriceRange }) => {
    const classes = useStyles();

    const handleChange = (index, { target: { name, value } }) => {
        const exist = priceRange[index];
        exist[name] = value;

        setPriceRange(x => ({ ...x, [index]: exist }));
    }

    const handleChangeNumber = (index, { target: { name, value } }) => {
        const number = parseInt(value)
        if (!number) return;

        const exist = priceRange[index];
        exist[name] = number;

        setPriceRange(x => ({ ...x, [index]: exist }));
    }

    const Cell = ({ children }) => <TableCell align="right">{children}</TableCell>;

    const Number = ({ value, name, index: i, width = '100%' }) =>
        <TextField
            onChange={e => handleChangeNumber(i, e)}
            inputProps={{ style: { padding: 5, width: width } }}
            value={value}
            name={name} />

    const Text = ({ value, name, index: i, width = '100%' }) =>
        <TextField
            onChange={e => handleChange(i, e)}
            inputProps={{ style: { padding: 5, width: width } }}
            value={value}
            name={name} />

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">{'תמחור רישיון:'}</DialogTitle>
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
                        {Object.keys(priceRange).map((row, i) => (
                            <TableRow key={row}>
                                <Cell>
                                    <Number value={priceRange[row].rangeMin} name={'rangeMin'} width={'30px'} index={row} /> -  <Number value={priceRange[row].rangeMax} name={'rangeMax'} width={'30px'} index={row} />
                                </Cell>
                                <Cell>
                                    <Text value={priceRange[row].usageType} name={'usageType'} index={row} />
                                </Cell>
                                <Cell >
                                    <Number value={priceRange[row].price} name={'price'} index={row} width={'50px'} /> ש"ח
                                    </Cell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button color="primary" onClick={onClose}>שמירה</Button>
        </Dialog>
    );
}


const useStyles = makeStyles({
    table: {
        minWidth: 600,
    }
});