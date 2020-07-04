import { Typography, Grid } from '@material-ui/core';
import React, { useEffect, useContext, useState } from 'react';
import IPCard from './components/IPCard';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import Axios from 'axios';

export default function (props) {
    const bla = [1, 2];
    const [ips, setIps] = useState([]);
    const { LoggedInUser } = useContext(UserStoreContext),
        { user } = JSON.parse(LoggedInUser);

    useEffect(() => {
        fetchIps()
    }, []);

    const fetchIps = async () => {
        try {
            const { data } = await Axios.get(`/api/ip/ownerIps/${user.id}`);
            setIps(data);
            console.log("ips: " + data.length)
        } catch (e) {
            console.log(e);
            setIps([]);
        }
    };

    return (<Grid container spacing={2} direction="column">
        <Grid item>
            <Typography variant="h3" gutterBottom>היצירות שלי</Typography>
        </Grid>
        {bla.map(ip =>
            <Grid item sm={12} key={ip}>
                <IPCard />
            </Grid>
        )}
    </Grid>
    );
}