import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, } from '@material-ui/core';
import { useParams } from "react-router-dom";

export default function (props) {
    const classes = useStyles();
    let { id } = useParams();
    
    return (
        <Typography variant="h6">{"עריכת ip"}</Typography>
    );
}


const useStyles = makeStyles((theme) => ({
    userCard: {
        marginRight: theme.spacing(2)
    }
}));