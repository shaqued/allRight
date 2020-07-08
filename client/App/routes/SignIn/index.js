/* eslint-disable react/no-multi-comp */
import React, { useContext, useState } from 'react';
import { Link, Paper, Box, Grid, Typography, InputAdornment, Snackbar, CssBaseline } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Forward as ForwardIcon } from '@material-ui/icons';
import axios from 'axios';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import logo from 'assets/icons/AllrightBlackLogo.png';
import Picture from 'assets/photos/Workspace.png';
import useStyles from './SignIn.css';
import SignInForm from './compnents/SignInForm';
import { useHistory } from "react-router-dom";

const Copyright = () => (<Typography variant='body1' color='textSecondary' align='center'>
    {'Copyright © '}
    <Link color='primary' href='/' >
        Allright
        </Link>{' '}
    {new Date().getFullYear()}
</Typography>);

const Alert = props => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
};


export default function SignInPage(props) {
    const classes = useStyles();

    const history = useHistory();

    const SNACKMESSAGES = {
        fillBothFields: "יש למלא את שני השדות",
        loginFailed: "מייל או סיסמא שגויים"
    }

    const [showSnack, setShowSnack] = React.useState(false);
    const [snackMessage, setSnackMessage] = React.useState(SNACKMESSAGES[0]);
    const userStore = useContext(UserStoreContext);


    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowSnack(false);
    };

    const onSignInClick = ({ password, email }) => {
        if (!password || !email) {
            setSnackMessage(SNACKMESSAGES['fillBothFields'])
            setShowSnack(true);

            return;
        }

        userStore.LogIn({ password, email })
            .then(() => {
                history.push('/', null)
            })
            .catch(() => {
                setSnackMessage(SNACKMESSAGES['loginFailed']);
                setShowSnack(true);
            });
    };

    return (<Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Link href='/' margin='normal'>
                <ForwardIcon />
            </Link>
            <Box component='div' className={classes.paper}>
                <SignInForm cb={onSignInClick} />
            </Box>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Grid>
        {/* left image section */}
        <Grid
            item container className={classes.imageSection}
            xs={false} sm={4} md={7} display='flex'
            justify='center' alignContent='flex-end'
        >
            <Box component='img' className={classes.image} src={Picture} />
        </Grid>
        <Snackbar open={showSnack} autoHideDuration={6000} onClose={handleSnackClose}>
            <Alert onClose={handleSnackClose} severity='warning'>
                {snackMessage}
            </Alert>
        </Snackbar>
    </Grid>);
}