// import profilePicture from '../../../assets/photos/profilePicture.jpg';
import profilePicture from 'assets/photos/profilePicture.jpg';
// import songPicture from 'Assets/songPicture';
import Navbar from '../../Shell/Navbar';
import React, { useContext, useEffect } from 'react';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import AccountCard from './components/AccountCard';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CssBaseline, Typography, } from '@material-ui/core';
import AccountPurchases from './views/AccountPurchases';
import AccountIps from './views/AccountIps';
import Settings from './views/Settings';
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";

export default function (props) {
    const classes = useStyles(),
        { match } = props,
        { LoggedInUser } = useContext(UserStoreContext),
        { user } = JSON.parse(LoggedInUser);
    let { url } = useRouteMatch();

    // when (loggenInUser === undefined)
    // <Redirect to={{pathname: '/login', state: {from: props.location}}}
    // create PrivateRoute for account
    // tutorial: https://reactrouter.com/web/example/auth-workflow

    // useEffect(() => {
    //     fetch();
    // }, []);

    const accountViews = [
        {
            id: 'ips',
            name: "היצירות שלי",
        }, {
            id: 'purchases',
            name: "הרכישות שלי"
        }, {
            id: 'settings',
            name: "הגדרות"
        }
    ]

    return (<>{ !user ? 
        // user is not connected, redirecting to sign in
        <Redirect to={'/signIn'} /> 
        :
        <>
            <CssBaseline />
            <Navbar />
            <Grid container justify="center" alignItems="flex-start" spacing={3}>
                {/* user section */}
                <Grid item sm={3}>
                    <AccountCard user={user} />
                </Grid>
                {/* content section */}
                <Grid item sm={6}>
                    <Switch>
                        <Route exact path={`${url}`} component={AccountIps}></Route>
                        <Route path={`${url}/purchases`} component={AccountPurchases}></Route>
                        <Route path={`${url}/settings`} component={Settings}></Route>
                    </Switch>
                </Grid>
            </Grid>
    </>}
    </>);
}


const useStyles = makeStyles((theme) => ({
    userCard: {
        marginRight: theme.spacing(2)
    }
}));