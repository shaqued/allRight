import React, { useState, useEffect } from 'react';
import SuggestedSongs from './components/suggested-songs';
import IpDescription from './components/ip-description';
import LicensesPlan from './components/licenses-plan';
import Navbar from '../../Shell/Navbar';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export default () => {
    let { id } = useParams();

    const [hasError, setErrors] = useState(false);
    const [ip, setIp] = useState({});

    async function fetchData() {
        const res = await fetch(`/api/ip/${id}`);
        res
            .json()
            .then(res => setIp(res))
            .catch(err => setErrors(err));
    }


    useEffect(() => {
        fetchData();
    }, [id]);

    return (
    <Grid>
        <Navbar />
        <IpDescription ip={ip} />
        <LicensesPlan ip={ip} />
        <SuggestedSongs ip={ip} />
    </Grid>
    );
}