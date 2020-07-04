import React, { useState, useContext, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import PurchaseCard from './components/PurchaseCard';
import Axios from 'axios';

export default function (props) {
    const bla = [1, 2];
    const [purchases, setPurchases] = useState([]);
    const { LoggedInUser } = useContext(UserStoreContext),
        { user } = JSON.parse(LoggedInUser);

    useEffect(() => {
        fetchPurchases()
    }, []);

    const fetchPurchases = async () => {
        try {
            const { data } = await Axios.get(`/api/purchase`, {
                params: {
                    user: user.id
                }
            });
            console.log(user.id)
            setPurchases(data);
            console.log("purchases: " + data.length)
        } catch (e) {
            console.log(e);
            setPurchases([]);
        }
    };

    return (
        <Grid container spacing={2} direction="column">
            <Grid item>
                <Typography variant="h3" gutterBottom>הרכישות שלי</Typography>
            </Grid>
            {bla.map(purchase =>
            <Grid item sm={12} key={purchase}>
                <PurchaseCard />
            </Grid>
        )}
        </Grid>
    );
}