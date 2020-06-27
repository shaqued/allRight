// import profilePicture from '../../../assets/photos/profilePicture.jpg';
import profilePicture from 'assets/photos/profilePicture.jpg';
// import songPicture from 'Assets/songPicture';
import Navbar from '../../Shell/Navbar';
import React from 'react';
import AccountCard from './components/AccountCard';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, Avatar, CssBaseline, Typography, Divider } from '@material-ui/core';
import IPCard from './components/IPCard';

export default function(props) {
    const classes = useStyles(),
        user = {
            name: {
                first: 'עידו',
                last: 'פרח'
            },
            email: 'ido@gmail.com',
            password: 'Aa123456',
            admin: true,
        };

    return (<>
        <CssBaseline />
        <Navbar />
        <Grid container justify="center" alignItems="center" spacing={3}>
            {/* user section */}
            <Grid item sm={3}>
                <AccountCard user={user} />
            </Grid>
            {/* content section */}
            <Grid item sm={6}>
                {/* <Grid container direction="column" justify='flex-start'> */}
                    
                    <IPCard />
                {/* </Grid> */}
            </Grid>
        </Grid>
    </>);
}

 
const useStyles = makeStyles((theme) => ({
    userCard: {
        marginRight: theme.spacing(2)
    }
}));