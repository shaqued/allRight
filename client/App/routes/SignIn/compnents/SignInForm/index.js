import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Link, Grid, Typography} from '@material-ui/core';
import TextField from 'components/TextField';
import PasswordInput from 'components/Registration/PasswordInput';

export default props => {
    const classes = useStyles();
        const [formFields, setFormFields] = useState({
            email: '',
            password: ''
        });

    const handleChange = fieldName => event => {
        const {value} = event.target;

        setFormFields(formFields => ({...formFields, [fieldName]: value}));
    };

    const handleClick = (e) => {
        e.preventDefault();
        props.cb(formFields);
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
              onClick={handleClick}
            >
                כניסה
            </Button>
            <Grid container justify='center'>
                <Grid item> 
                    <Typography align='center' display='inline'> {'עדיין לא חברים שלנו?'} </Typography>
                     <Link href='/signUp' variant='body1'> {'הצטרפו עכשיו'} </Link>
                </Grid>
            </Grid>
        </form>
    </>)
};

const useStyles = makeStyles(theme => ({
    form: {
        width: '70%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));