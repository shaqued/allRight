import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, CardContent, Card, CardMedia, CardActionArea } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IpCard from '../../../../../components/IpCard';
import Axios from 'axios';
import history from '../../../../../history';

export default ({ ip }) => {
    const classes = useStyles(),
        [suggestedIps, setSuggestedIps] = useState([]);

    useEffect(() => {
        if (ip._id)
            fetch();
    }, [ip]);

    const goToIp = (id) => {
        history.push(`/ip/${id}`);
    };

    const fetch = async () => {
        try {
            const { data } = await Axios.get(`/api/ip/${ip._id}/suggestedIps`);
            setSuggestedIps(data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Grid item container alignItems="center" direction="column">
            {/* <Grid xs={12} item> */}
            <Grid item>
                <Typography variant="h2" className={classes.title}>
                    עוד שירים שאולי תאהבו
                </Typography>
            </Grid>
            <Grid item className={classes.content}>
            {suggestedIps.map((tile) => (
                <IpCard classes={classes} {...tile} key={tile._id} onClick={() => goToIp(tile._id)} />
            ))}
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        padding: '32px 0px',
        width: '1000px'
    },
    card: {
        boxShadow: 'none',
        borderRadius: 0,
        backgroundColor: 'transparent',
        width: '175px',
        paddingLeft: '7px',
        display: 'inline-block'
    },
    cardContent: {
        padding: 0
    },
    media: {
        height: '150px'
    },
    content: {
        overflow: 'auto',
        whiteSpace: 'nowrap',
        width: '1000px',
        paddingBottom: '50px'
    }
}));