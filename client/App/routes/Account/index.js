import Navbar from 'shell/Navbar';
import React, { useContext } from 'react';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import AccountCard from './components/AccountCard';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CssBaseline, Typography, } from '@material-ui/core';
import AccountPurchases from './views/AccountPurchases';
import AccountIps from './views/AccountIps';
import Settings from './views/Settings';
import { observer } from 'mobx-react'
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";

export default observer((props) => {
    const classes = useStyles(),
        { match } = props,
        userStore = useContext(UserStoreContext);
    let { url } = useRouteMatch();

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

    const isUserLoggedIn = function() {
    }

    return (<>{ (!userStore.UserData && !userStore.isLoading) ? 
        //user is not connected, redirecting to sign in
        <Redirect to={'/signIn'} /> 
        :
        <>
            <CssBaseline />
            <Navbar />
            <Grid container justify="center" alignItems="flex-start" spacing={3}>
                {/* user section */}
                <Grid item sm={3}>
                    <AccountCard user={userStore.UserData} />
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
});

const useStyles = makeStyles((theme) => ({
    userCard: {
        marginRight: theme.spacing(2)
    }
}));