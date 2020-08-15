import React, { useState, useEffect } from 'react';
import SuggestedSongs from './components/suggested-songs';
import IpDescription from './components/ip-description';
import LicensesPlan from './components/licenses-plan';
import Navbar from '../../Shell/Navbar';
import Axios from 'axios';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { convertDataToImage } from 'clientCommon/Util.js';

export default () => {
    let { id } = useParams();

    const [hasError, setErrors] = useState(false);
    const [ip, setIp] = useState({});

    async function fetchData() {
        try {
            const { data } = await Axios.get(`/api/ip/${id}`);
            setIp(data);
        } catch (e) {
            console.log(e);
            setErrors(e);
        }
    }

    // useEffect(() => {
    //     fetchData();
    // }, [id]);

    
    useEffect(() => {
        fetchData();
    }, []);

    return (<>
        <Navbar />
        <Grid container spacing={3}>
            <IpDescription ip={ip} />
            <LicensesPlan ip={ip} />
            <SuggestedSongs ip={ip} />
        </Grid>
    </>);
}