import profilePicture from 'assets/photos/profilePicture.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Card, Avatar, Typography, Divider, CardContent, Grid,
    List, ListItem, ListItemText,
} from '@material-ui/core';
import { useLocation, Link } from "react-router-dom";

export default function (props) {
    const classes = useStyles(),
        { user } = props;

    function isSelected(path) {
        let { pathname: location } = useLocation();
        return location === path;
    }

    return (<List component="nav">
        <Divider light />
        <ListItem classes={{ selected: classes.selected }} button component={Link} to='/account' selected={isSelected('/account')}>
            <ListItemText primaryTypographyProps={{ align: "right" }} primary="היצירות שלי" />
        </ListItem>
        <Divider light />
        <ListItem classes={{ selected: classes.selected }} button component={Link} to='/account/purchases' selected={isSelected('/account/purchases')}>
            <ListItemText primaryTypographyProps={{ align: "right" }} primary="הרכישות שלי" />
        </ListItem>
        <Divider light />
        <ListItem classes={{ selected: classes.selected }} button component={Link} to='/account/settings' selected={isSelected('/account/settings')}>
            <ListItemText primaryTypographyProps={{ align: "right" }} primary="הגדרות" />
        </ListItem>
        <Divider light />
    </List>)
}

const useStyles = makeStyles((theme) => ({
    selected: {
        backgroundColor: "#fef2f5!important"
    }
}));