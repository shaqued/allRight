import React from 'react';
import { Button, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@material-ui/core';
import useStyles from './SignIn.css'
import Picture from '../../../assets/photos/Workspace.png';
import TextField from '../../../components/TextField/TextField'

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Allright
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignInPage(props) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            {/* <CssBaseline /> */}
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box component="div" className={classes.paper}>
                    <Typography component="h1" variant="h2">
                        טוב לראות אתכם!
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="כתובת מייל"
                            placeholder="yourname@example.com"
                            name="email"
                            type="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            showlink="true"
                            label="סיסמה"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            placeholder="סיסמה"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Password"
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            כניסה
                        </Button>
                        <Box>
                            <Typography display="inline"> {"עדיין לא חברים שלנו?"} </Typography>
                            <Link href="#" variant="body2"> {"הצטרפו עכשיו"} </Link>
                        </Box>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid item xs={false} sm={4} md={7} display="flex" className={classes.imageSection}>
                <Box component="img" className={classes.image} src={Picture} />
            </Grid>
        </Grid>
    )
}