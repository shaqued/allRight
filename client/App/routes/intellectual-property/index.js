import React, { useState, useEffect } from 'react';
import SuggestedSongs from './components/suggested-songs';
import IpDescription from './components/ip-description';
import LicensesPlan from './components/licenses-plan';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import convertDataToImage from 'common/Util.js';

export default () => {
    let { id } = useParams();

    const [hasError, setErrors] = useState(false);
    const [ip, setIp] = useState({});

    async function fetchData() {
        const res = await fetch(`/api/ip/${id}`);
        res
            .json()
<<<<<<< HEAD
          .then(res => {
            var base64Flag = 'data:image/jpeg;base64,';
            res.image = base64Flag + arrayBufferToBase64(res.image.data.data);
            console.log(res);
            return res;
          })
=======
            .then(res => {
                res.image = convertDataToImage(res.image.data.data);
                return res;
            })
>>>>>>> 5780b6a... added account page, route, card
            .then(res => setIp(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <Grid container direction='column'>
            <IpDescription ip={ip} />
            <LicensesPlan ip={ip} />
            <SuggestedSongs ip={ip} />
        </Grid>
    );
}