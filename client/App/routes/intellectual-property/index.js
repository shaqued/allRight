import React, { useState, useEffect } from 'react';
import SuggestedSongs from './components/suggested-songs';
import IpDescription from './components/ip-description';
import LicensesPlan from './components/licenses-plan';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export default () => {
    let { id } = useParams();

    const [hasError, setErrors] = useState(false);
    const [ip, setIP] = useState({});

    async function fetchData() {
        const res = await fetch("http://localhost:8080/api/ip/:id");
        res
            .json()
            .then(res => setIP(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <Grid container direction='column'>
            <IpDescription ip={ip} />
            <LicensesPlan ip={ip} />
            <SuggestedSongs ip={ip} />
        </Grid>
    );
}