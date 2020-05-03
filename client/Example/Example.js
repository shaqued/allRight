import { StoreContext } from '../Store/StoreProvider';
import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { observer } from 'mobx-react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import TapePhoto from '../assets/photos/Tape.png';

export default observer(() => {
    const store = useContext(StoreContext);
    const onChange = e => {
        store.changeObservable(e.target.value);
    };

    return (
        <Grid container 
            spacing={16}
            direction="row"
            justify="center"
            alignItems="center">
            <Paper>
                <TextField onChange={onChange} />
                <Typography variant="h1">דגן המלכה</Typography>
                <Typography>store value: {store.example}</Typography>
                <Typography>this is a computed field exmample, lenght: {store.exampleLength}</Typography>
                <Button variant="contained" color="primary">כפתור נחמד</Button>
                <Button>כפתור נחמד</Button>
            </Paper>
        </Grid>
    );
});