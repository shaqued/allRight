import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../../../../../components/TextField';
import PasswordInput from '../../../../../components/Registration/PasswordInput';
import {
    Button, FormControlLabel, Checkbox, Link, 
    Box, Grid, Typography, InputAdornment
} from '@material-ui/core';

export default (props) => {
    const classes = useStyles(),
        [formFields, setFormFields] = useState({
            email: '',
            password: ''
        });

    const handleChange = (fieldName) => (event) => {
        let { value } = event.target;
        setFormFields((formFields) => ({...formFields, [fieldName]: value}));
    };

    return (<>
        <Typography component='h1' variant='h2'>
            טוב לראות אתכם!
        </Typography>
        <form className={classes.form} noValidate>
            <TextField
                label='כתובת מייל'
                id='email'
                name='email'
                type='email'
                margin='normal'
                required
                fullWidth
                placeholder='yourname@example.com'
                autoComplete='email'
                autoFocus
                onChange={handleChange('email')}
                value={formFields.email}
            />
            <PasswordInput
                label='סיסמה'
                id='password'
                name='password'
                type='password'
                margin='normal'
                showlink
                required
                fullWidth
                placeholder='סיסמה'
                autoComplete='current-password'
                onChange={handleChange('password')}
                value={formFields.password}
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                //onClick='handleSubmit' -TODO Ido
            >
                כניסה
            </Button>
            <Grid container justify='center'>
                <Grid item> 
                    <Typography align='center' display='inline'> {'עדיין לא חברים שלנו?'} </Typography>
                    <Link href='#' variant='body1'> {'הצטרפו עכשיו'} </Link>
                </Grid>
            </Grid>
        </form>
    </>)
}

const useStyles = makeStyles(theme => ({
    form: {
        width: '70%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))