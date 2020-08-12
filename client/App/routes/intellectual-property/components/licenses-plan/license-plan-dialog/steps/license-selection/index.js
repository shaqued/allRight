import React from 'react';
import useStyles from './license-selction.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@material-ui/core';

export default ({ selectedPriceSection }) => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState();
    const isSelected = row => selected === row;

    const handleClick = (event, row) => {
        if (selected === row) {
            setSelected();
        } else {
            setSelected(row);
        }
    };


    return (
        <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">כמות קהל</TableCell>
                        <TableCell align="right">סוג מדיה</TableCell>
                        <TableCell align="right">מחיר</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectedPriceSection.map((row) => {
                        const isItemSelected = isSelected(row);

                        return (
                            <TableRow key={row.min}
                                hover
                                onClick={(event) => handleClick(event, row)}
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                key={row.name}
                                selected={isItemSelected}>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={isItemSelected}
                                    /></TableCell>
                                <TableCell align="right">{row.rangeMin} - {row.rangeMax}</TableCell>
                                <TableCell align="right">{row.usageType}</TableCell>
                                <TableCell align="right">{row.price} ש"ח</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}