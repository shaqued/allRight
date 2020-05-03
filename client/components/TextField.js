import { TextField, Link, Box, Typography, flexbox } from '@material-ui/core';
import React from 'react';
import useStyles from './TextField.css'

export default (props) => {
    const classes = useStyles(),
        { label } = props,
        textFieldProps = {...props};
    textFieldProps.label = undefined;
    textFieldProps.showlink = undefined;

    return (<Box className={classes.root}>
        <Box display="flex" justifyContent="space-between">
            <Typography display="inline" variant="body2">{label}</Typography>
            {props.showlink && 
            <Link variant="body2" href="#">שכחתם סיסמה?</Link>}
        </Box>
        <TextField inputlabelprops={{shrink: false}} size="small" {...textFieldProps} />
        {/* <TextField InputLabelProps={{shrink: false}} size="small" {...props} /> */}
    </Box>);
};