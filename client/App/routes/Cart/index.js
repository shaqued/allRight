import React, { useState, useContext, useEffect } from 'react';
import Navbar from 'shell/Navbar';
import { Typography, Grid, CssBaseline } from '@material-ui/core';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import CartItemCard from './components/CartItemCard';
import Axios from 'axios';

export default function (props) {
    const [purchases, setPurchases] = useState([]);
        // { LoggedInUser } = useContext(UserStoreContext),
        // { user } = JSON.parse(LoggedInUser);

    useEffect(() => {
        fetchPurchases()
    }, []);

    const fetchPurchases = async () => {
        try {            
            const { data } = await Axios.get(`/api/purchase`, {
                // params: {
                //     user: user.id
                // }
            });
            setPurchases(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (<>
        <CssBaseline />
        <Navbar />
        <Grid container spacing={3} direction="column">
            <Grid item>
                <Typography variant="h3" gutterBottom>עגלת הקניות</Typography>
            </Grid>
            {purchases.map(purchase => (
                purchase.cartItems.map(cartItem => (
                    <Grid item sm={12} key={cartItem._id}>
                        <CartItemCard purchase={{
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
    </>);
}