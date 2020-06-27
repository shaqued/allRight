import Picture from '../../../assets/photos/Workspace.png';
import useStyles from './SignIn.css';
import SignInForm from './compnents/SignInForm';
import React from 'react';
import { Link, Paper, Box, Grid, Typography, InputAdornment, CssBaseline } from '@material-ui/core';
import { Forward as ForwardIcon } from '@material-ui/icons';

const Copyright = () => (
    <Typography variant='body1' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='primary' href='/' >
            Allright
        </Link>{' '}
        {new Date().getFullYear()}
    </Typography>
);

export default function SignInPage(props) {
    const classes = useStyles();

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} elevation={6} square>
                <Link href='/' margin='normal'>
                    <ForwardIcon />
                </Link>
                <Box component='div' className={classes.paper}>
                    <SignInForm />
                </Box>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Grid>
            {/* left image section */}
            <Grid item container className={classes.imageSection}
                xs={false} sm={4} md={7} display='flex'
                justify='center' alignContent='flex-end'
                >
                <Box component='img' className={classes.image} src={Picture} />
            </Grid>
        </Grid>
    );
}