import { Typography, Grid, Button } from '@material-ui/core';
import React, { useEffect, useContext, useState } from 'react';
import IPCard from './components/IPCard';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import Axios from 'axios';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';

export default function (props) {
    const [ips, setIps] = useState([]),
        classes = useStyles(),
        { UserData } = useContext(UserStoreContext);

    useEffect(() => {
        fetchIps()
    }, []);

    const fetchIps = async () => {
        try {
            // TODO: dagan change back to /ownerIps/blabla
            // after the dependencies in the db will be ok:
            const { data } = await Axios.get(`/api/ip/ownerIps/${user._id}`); 
            console.log('Account ips: ' + data);
            // until then:
            //const { data } = await Axios.get(`/api/ip`);
            setIps(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (<Grid container spacing={2} direction="column">
        <Grid item container justify="space-between">
            <Grid item>
                <Typography variant="h3" gutterBottom>היצירות שלי</Typography>
            </Grid>
            <Grid item>
                {/* TODO: dagan change path to create ip path */}
                <Button
                    component={Link}
                    to='/'
                    color='primary'
                    variant='contained'
                    className={classes.button}
                >
                    {'יצירה חדשה'}
                </Button>
            </Grid>
        </Grid>
        {ips.length > 0 ? 
        ips.map(ip =>
            <Grid item sm={12} key={ip._id}>
                <IPCard ip={ip} />
            </Grid>
        ) : 
        <Grid item>
            <Typography variant="h6">עדיין לא הוספת יצירות</Typography>
        </Grid>}
    </Grid>
    );
}


const useStyles = makeStyles((theme) => ({
    button: {
        padding: '10px',
        height: 'fit-content',
    }
}));