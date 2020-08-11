import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default function RadioButtonsPicker(props) {
    const { value, label, onChange, options } = props,
        classes = useStyles(),
        radio = <Radio />;

    return (<FormControl component="fieldset">
        {/* <FormLabel component="legend" value={value} onChange={handleChange}>{label}</FormLabel> */}
        <Typography display="inline" variant="body1">{label}</Typography>
        <RadioGroup row name="gender" value={value} onChange={onChange}>
            {options.map(option => 
                <FormControlLabel key={option.value} classes={{root: classes.formControlLabel}} 
                    value={option.value} control={radio} label={option.label} />    
            )}            
        </RadioGroup>
    </FormControl>) 
}

const useStyles = makeStyles(theme => ({
    formControlLabel: {
        marginLeft: "10px",
        marginRight: "-10px",
    },
}))