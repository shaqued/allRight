import React, { useState, useEffect } from 'react';
import SuggestedSongs from './components/suggested-songs';
import IpDescription from './components/ip-description';
import LicensesPlan from './components/licenses-plan';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export default () => {
    let { id } = useParams();

    const [hasError, setErrors] = useState(false);
    const [ip, setIp] = useState({});

    function arrayBufferToBase64 (buffer) {
      let binary = '';
      let bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => binary += String.fromCharCode(b));

      return window.btoa(binary);
    };

    async function fetchData() {
        const res = await fetch(`/api/ip/${id}`);
        res
            .json()
          .then(res => {
            var base64Flag = 'data:image/jpeg;base64,';
            res.image = base64Flag + arrayBufferToBase64(res.image.data.data);
            return res;
          })
            .then(res => setIp(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Grid container direction='column'>
            <IpDescription ip={ip} />
            <LicensesPlan ip={ip} />
            <SuggestedSongs ip={ip} />
        </Grid>
    );
}