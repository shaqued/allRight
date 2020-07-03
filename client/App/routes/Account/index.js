// import profilePicture from '../../../assets/photos/profilePicture.jpg';
import profilePicture from 'assets/photos/profilePicture.jpg';
// import songPicture from 'Assets/songPicture';
import Navbar from '../../Shell/Navbar';
import React, {useEffect} from 'react';
import AccountCard from './components/AccountCard';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, Avatar, CssBaseline, Typography, Divider } from '@material-ui/core';
import IPCard from './components/AccountIPs/components/IPCard';
import PurchaseCard from './components/AccountPurchases/PurchaseCard';
import { Route } from "react-router-dom";

export default function (props) {
    const classes = useStyles(),
        { match } = props,
        user = {
            name: {
                first: 'עידו',
                last: 'פרח'
            },
            email: 'ido@gmail.com',
            password: 'Aa123456',
            admin: true,
        };

        // <Redirect to={{pathname: '/login', state: {from: props.location}}}



    return (<>
        <CssBaseline />
        <Navbar />
        <Grid container justify="center" alignItems="flex-start" spacing={3}>
            {/* user section */}
            <Grid item sm={3}>
                <AccountCard user={user} />
            </Grid>
            {/* content section */}
            <Grid item sm={6}>
                {/* <Grid container spacing={2}>
                    <Grid item sm={12}>
                        <IPCard />
                    </Grid>
                    <Grid item sm={12}>
                        <PurchaseCard />
                    </Grid>
                </Grid> */}

                {/* ==================== ng-view placeholer ====================== */}
            </Grid>
        </Grid>
        {/* routing */}
        <Route
            path={`${match.path}/myIps`}
            render={({ match }) => (
                switch (match.params.name)
                
            )}
        />
    </>);
}


const useStyles = makeStyles((theme) => ({
    userCard: {
        marginRight: theme.spacing(2)
    }
}));