import profilePicture from 'assets/photos/profilePicture.jpg';
import React from 'react';
import AccountMenu from '../AccountMenu';
import { makeStyles } from '@material-ui/styles';
import { Card, Avatar, Typography, Divider, CardContent, Grid, 
    List, ListItem, ListItemText } from '@material-ui/core';

export default function (props) {
    const classes = useStyles(),
        { user } = props;

    return (<Card className={classes.card}>
        {/* change src to data from server! */}
        <CardContent>
            <Grid container justify="center">
                <Grid item className={classes.cardHeader}>
                    <Avatar src={profilePicture} alt={user.name.first} className={classes.avatar} />
                    <Typography align="center" variant="h3" component="h1">{user.name.first + " " + user.name.last}</Typography>
                </Grid>
            </Grid>
        </CardContent>
        <AccountMenu />
    </Card>);
}

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(16),
        height: theme.spacing(16),
        margin: theme.spacing(1, 2, 1, 2)
    },
    cardHeader: {
        margin: theme.spacing(1)
    },
    card: {
        width: "90%"
    }
}));