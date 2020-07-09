import { Typography, Grid } from '@material-ui/core';
import React, { useEffect, useContext, useState } from 'react';
import IPCard from './components/IPCard';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import Axios from 'axios';

export default function (props) {
    const [ips, setIps] = useState([]);
    const { LoggedInUser } = useContext(UserStoreContext),
        { user } = JSON.parse(LoggedInUser);

    useEffect(() => {
        fetchIps()
    }, []);

    const fetchIps = async () => {
        try {
            // after the dependencies in the db will be ok:
            //const { data } = await Axios.get(`/api/ip/ownerIps/${user.id}`);
            // until then:
            const { data } = await Axios.get(`/api/ip`);
            setIps(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (<Grid container spacing={2} direction="column">
        <Grid item>
            <Typography variant="h3" gutterBottom>היצירות שלי</Typography>
        </Grid>
        {ips.map(ip =>
            <Grid item sm={12} key={ip._id}>
                <IPCard ip={ip} />
            </Grid>
        )}
    </Grid>
    );
}