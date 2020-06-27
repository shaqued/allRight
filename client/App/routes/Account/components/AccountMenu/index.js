import profilePicture from 'assets/photos/profilePicture.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Card, Avatar, Typography, Divider, CardContent, Grid,
    List, ListItem, ListItemText
} from '@material-ui/core';

export default function (props) {
    const classes = useStyles(),
        { user } = props;

    return (<List component="nav">
        <Divider light />
        <ListItem button>
            <ListItemText primaryTypographyProps={{ align: "right" }} primary="היצירות שלי" />
        </ListItem>
        <Divider light />
        <ListItem button>
            <ListItemText primaryTypographyProps={{ align: "right" }} primary="רשיונות" />
        </ListItem>
        <Divider light />
        <ListItem button>
            <ListItemText primaryTypographyProps={{ align: "right" }} primary="הגדרות" />
        </ListItem>
        <Divider light />
    </List>)
}

const useStyles = makeStyles((theme) => ({

}));