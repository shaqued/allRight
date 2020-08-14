import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, CardContent, Card, CardMedia, CardActionArea } from '@material-ui/core';
import useStyles from './suggested-songs.css';
import { Link } from 'react-router-dom';
import IpCard from '../../../../../components/IpCard';
import Axios from 'axios';
import history from '../../../../../history';

export default ({ ip }) => {
    const classes = useStyles();

    const [errors, setErrors] = useState(false);
    const [suggestedIps, setSuggestedIps] = useState([]);

    useEffect(() => {
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
            setSuggestedIps([]);
        }
    }

    return (
        <Box>
            <Grid xs={12} item>
                <Typography variant="h2">
                    עוד שירים שאולי תאהבו
                </Typography>
            </Grid>
            {suggestedIps.map((tile) => (
                <IpCard classes={classes} {...tile} key={`${tile._id}`} onClick={() => goToIp(tile._id)} />
            ))}
        </Box>
    );
}