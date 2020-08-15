import { Typography, Grid, Button, Link, CssBaseline } from '@material-ui/core';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from 'components/TextField';
import GenderRadioButtons from 'components/RadioButtonsPicker';
import PasswordInput from 'components/Registration/PasswordInput';
import genderOptions from 'common/genderOptions';
import Axios from 'axios';
import Alert from 'components/Alert';

export default function (props) {
    const classes = useStyles(),
        snackbarMessages = {
            success: "כל הפרטים עודכנו בהצלחה",
            error: "אוי לא, משהו השתבש. נסו שנית מאוחר יותר"
        },
        [userData, setUserData] = useState({}),
        [updateStatus, setUpdateStatus] = useState('success'),
        [showSnackbar, setShowSnackbar] = useState(false),
        { UserData } = useContext(UserStoreContext);

    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = async () => {
        try {
            // const userIdForTesting = '5f33096ce62e83151c775a71';
            // TODO: dagan change to original user id
            const { data } = await Axios.get(`/api/users/${ userData._id }`);
            // const { data } = await Axios.get(`/api/users/${userIdForTesting}`);
            setUserData(data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (fieldName) => (event) => {
        let { value } = event.target;
        setUserData((userData) => ({ ...userData, [fieldName]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.put(`/api/users/${userIdForTesting}`, {
                user: userData
            });
            response.status == 200 ? setUpdateStatus('success') : setUpdateStatus('error');
            setShowSnackbar(true);
        } catch (e) {
            setUpdateStatus('error')
            setShowSnackbar(true);
            console.log(e);
        }
    }

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowSnackbar(false);
    };


    return (<>
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h3" gutterBottom>הגדרות</Typography>
            </Grid>
            <Grid item sm={6}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
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
                                onChange={handleChange('name.first')}
                                value={userData.name ? userData.name.first : ''}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="שם משפחה"
                                placeholder="שם משפחה"
                                name="lastName"
                                autoComplete="last-name"
                                onChange={handleChange('name.last')}
                                value={userData.name ? userData.name.last : ""}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
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
                                value={userData.birthDate ? new Date(userData.birthDate).toJSON().slice(0, 10) : new Date().toJSON().slice(0, 10)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <GenderRadioButtons
                                label="מגדר"
                                onChange={handleChange('gender')}
                                value={userData.gender || ''}
                                options={genderOptions}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
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
                                value={userData.email || ''}
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
                        שמירת שינויים
                    </Button>
                </form>
            </Grid>
        </Grid>
        <Alert open={showSnackbar} onClose={handleSnackClose} severity={updateStatus}>
            {snackbarMessages[updateStatus]}
        </Alert>
    </>
    );
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
        //marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))