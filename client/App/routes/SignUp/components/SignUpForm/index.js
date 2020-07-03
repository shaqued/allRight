import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../../../../../components/TextField';
import GenderRadioButtons from '../../../../../components/RadioButtonsPicker';
import PasswordInput from '../../../../../components/Registration/PasswordInput';
import {
    Button, Link, CssBaseline, Box, Grid, Typography
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserStoreContext } from '../../../../../Stores/UserStore/UserStoreProvider';
import genderOptions from '../../../../../../common/genderOptions'
import {omit} from 'lodash';

export default function SignUpForm(props) {
    const classes = useStyles(),
        [formFields, setFormFields] = useState({
            firstName: '',
            lastName: '',
            birthDate: new Date().getTime(),
            gender: '',
            email: '',
            password: ''
        });

    const userStore = useContext(UserStoreContext);
    const history = useHistory();
    const handleChange = (fieldName) => (event) => {
        let { value } = event.target;
        setFormFields((formFields) => ({ ...formFields, [fieldName]: value }));
    };

    const handleSubmit =  (e) => {
        e.preventDefault();
        const user = {...formFields, name: {
            first: formFields.firstName,
            last: formFields.lastName
        }};

        user.birthDate = new Date(user.birthDate).toISOString();
        
        omit(user, ['firstName', 'lastName']);

        userStore.Register(user)
            .then(() => {
                history.push('/', null)
            })
    }

    return (<div className={classes.paper}>
        <Grid container justify="flex-start">
            <Grid item>
                <Typography component="h1" variant="h2">
                    הצטרפו אלינו
                </Typography>
            </Grid>
        </Grid>
        <form className={classes.form} noValidate>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="שם פרטי"
                        placeholder="שם פרטי"
                        autoFocus
                        onChange={handleChange('firstName')}
                        value={formFields.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="שם משפחה"
                        placeholder="שם משפחה"
                        name="lastName"
                        autoComplete="last-name"
                        onChange={handleChange('lastName')}
                        value={formFields.lastName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="bday"
                        name="birthDate"
                        variant="outlined"
                        required
                        fullWidth
                        type="date"
                        id="birthDate"
                        label="תאריך לידה"
                        placeholder="תאריך לידה"
                        autoFocus
                        onChange={handleChange('birthDate')}
                        defaultValue={new Date(formFields.birthDate).toJSON().slice(0, 10)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <GenderRadioButtons
                        label="מגדר"
                        onChange={handleChange('gender')}
                        value={formFields.gender}
                        options={genderOptions}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="כתובת מייל"
                        placeholder='yourname@example.com'
                        name="email"
                        autoComplete="email"
                        onChange={handleChange('email')}
                        value={formFields.email}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PasswordInput
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        placeholder='סיסמה'
                        label="סיסמה"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange('password')}
                        value={formFields.password}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
            >
                הרשמה
            </Button>
            <Grid container justify="flex-start">
                <Grid item>
                    <Typography align='center' display='inline'> {'כבר חברים שלנו?'} </Typography>
                    <Link href='/signIn' variant='body1'> {'התחברו'} </Link>
                </Grid>
            </Grid>
        </form>
    </div>)
}

const useStyles = makeStyles(theme => ({
    paper: {
        margin: 'auto',
        marginTop: theme.spacing(8),
        display: 'flex',
        width: "50%",
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))