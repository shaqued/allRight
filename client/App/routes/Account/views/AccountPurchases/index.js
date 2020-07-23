import React, { useState, useContext, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import PurchaseCard from './components/PurchaseCard';
import Axios from 'axios';

export default function (props) {
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
            setPurchases(data);
            console.log(data[0])
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Grid container spacing={2} direction="column">
            <Grid item>
                <Typography variant="h3" gutterBottom>הרכישות שלי</Typography>
            </Grid>
            {purchases.map(purchase => (
                purchase.cartItems.map(cartItem => (
                    <Grid item sm={12} key={cartItem._id}>
                        <PurchaseCard purchase={{
                            ...purchase,
                            ...cartItem,
                            cartItems: undefined,
                            '_id': cartItem._id,
                            purchaseId: purchase._id,
                        }} />
                    </Grid>
                ))
            ))}
        </Grid>
    );
}