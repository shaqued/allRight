import React, { useState, useEffect } from 'react';
import { Grid, Box, makeStyles, Typography, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import useStyles from './suggested-songs.css';
import Mergui from '../../../../../assets/photos/Mergui.png';

export default ({ ip }) => {
    const classes = useStyles();

    const [hasError, setErrors] = useState(false);
    const [suggestedIps, setSuggestedIps] = useState([]);

    function arrayBufferToBase64(buffer) {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));

        return window.btoa(binary);
    };

    async function fetchData() {
        console.log(ip.image);
        const res = await fetch(`/api/ip/${ip._id}/suggestedIps`);
        res
            .json()
            .then(res => {
                var base64Flag = 'data:image/jpeg;base64,';
                var a =  res.map(x => ({...x, image: x.image && (base64Flag + arrayBufferToBase64(x.image.data.data))}));
                 console.log(a);
                return res.map(x => ({...x, image: x.image && (base64Flag + arrayBufferToBase64(x.image.data.data))}));
            })
            .then(res => setSuggestedIps(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, [ip]);


    return (
        <Grid container style={{ height: '30%' }}>
            <Grid xs={12} item>
                <Typography variant="h2">
                    עוד שירים שאולי תאהבו
                </Typography>
            </Grid>
            <GridList xs={12} className={classes.gridList} cols={7}>
                {suggestedIps.map((tile) => (
                    <GridListTile key={tile._id} className={classes.tile}>
                        <Box component="img" src={tile.image ? tile.image : Mergui} className={classes.tile}/>
                        <GridListTileBar title={tile.name} />
                    </GridListTile>
                ))}
            </GridList>
        </Grid>
    );
}