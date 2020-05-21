import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Mergui from '../../../../../assets/photos/Mergui.png';

export default () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid xs={12} item>
                <Typography variant="h2">
                    עוד שירים שאולי תאהבו
                    </Typography>
            </Grid>
            <Grid xs={12} item>
                <Grid container>
                    {suggestions.map((song) => (
                        <Grid xs={2} item>
                            <Box className={classes.box}>
                                <img src={Mergui} className={classes.songPhoto} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles({
    Hpedding: {
        maxWidth: '40px'
    },
    Vpedding: {
        minHeight: '35px'
    },
    box: {
        textAlign: 'center'
    },
    songPhoto: {
        height: '200px',
        width: '200px'
    },
});

const suggestions = [
    '1', '2', '3', '4', '5', '6'
];