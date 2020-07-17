import React, { useState, useEffect } from 'react';
import { Grid, Typography, CardContent, Card, CardMedia, CardActionArea } from '@material-ui/core';
import useStyles from './suggested-songs.css';
import { Link } from 'react-router-dom';

export default ({ ip }) => {
    const classes = useStyles();

    const [errors, setErrors] = useState(false);
    const [suggestedIps, setSuggestedIps] = useState([]);

    function arrayBufferToBase64(buffer) {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));

        return window.btoa(binary);
    };

    async function fetchData() {
        const res = await fetch(`/api/ip/${ip._id}/suggestedIps`);
        res
            .json()
            .then(res => {
                var base64Flag = 'data:image/jpeg;base64,';
                return res.map(x => ({ ...x, image: x.image && (base64Flag + arrayBufferToBase64(x.image.data.data)) }));
            })
            .then(res => setSuggestedIps(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, [ip]);


    return (
        <Grid container>
            <Grid xs={12} item>
                <Typography variant="h2">
                    עוד שירים שאולי תאהבו
                </Typography>
            </Grid>
            {suggestedIps.map((tile) => (
                <Card className={classes.card}>
                    <CardActionArea
                        component={Link}
                        to={{ pathname: '/ip/' + tile._id }}>
                        <CardMedia
                            image={tile.image}
                            title={tile.name}
                            className={classes.media}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="body2">
                                {tile.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {tile.performer}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Grid>
    );
}