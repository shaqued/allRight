import SignUpForm from './components/SignUpForm';
import logo from '../../../assets/icons/AllrightLogo.png';
import React, { useState } from 'react';
import { Link, Paper, Box, Grid, Typography, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function SignUnPage(props) {
    const classes = useStyles();

    return (
        <Grid container component='main' className={classes.root}>
            <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
                {/* <Box component='div' className={classes.paper}> */}
                    <SignUpForm />
                {/* </Box> */}
                <Box mt={5}>
                    {}
                </Box>
            </Grid>
            {/* left section */}
            <Grid item container className={classes.imageSection}
                xs={false} sm={4} md={5} display='flex'
                justify='center' alignContent='flex-end'
                >
                {/* <Box component='img' className={classes.image} src={Picture} /> */}
            </Grid>
        </Grid>
    );
}

const backgroundColor = '#C0D1F9';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    imageSection: {
        backgroundColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    image: {
        height: '400px', // todo: switch to rem/em
        width: '400px',
        margin: 'auto'
    },
    paper: {
        marginTop: "300px", //theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}));