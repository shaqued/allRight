import profilePicture from 'assets/photos/profilePicture.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Card, Avatar, Typography, Divider, CardContent, Grid,
    List, ListItem, ListItemText,
} from '@material-ui/core';
import { useRouteMatch, Link } from "react-router-dom";

export default function (props) {
    const classes = useStyles(),
        { user } = props;
    let { url } = useRouteMatch();

//<ListItem button component={Link} to='/some-url'>...</ListItem>

    return (<List component="nav">
        <Divider light />
        <ListItem button component={Link} to={`${url}/myIps`}>
            <ListItemText primaryTypographyProps={{ align: "right" }} primary="היצירות שלי" />
        </ListItem>
        <Divider light />
        <ListItem button component={Link} to={`${url}/myPurchases`}>
            <ListItemText primaryTypographyProps={{ align: "right" }} primary="הרכישות שלי" />
        </ListItem>
        <Divider light />
        <ListItem button component={Link} to={`${url}/settings`}>
            <ListItemText primaryTypographyProps={{ align: "right" }} primary="הגדרות" />
        </ListItem>
        <Divider light />
    </List>)
}

const useStyles = makeStyles((theme) => ({

}));