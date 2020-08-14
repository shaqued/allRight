import React, { useState, useContext, useEffect } from 'react';
import Navbar from 'shell/Navbar';
import { Typography, Grid, CssBaseline, Button } from '@material-ui/core';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import CartItemCard from './components/CartItemCard';
import Axios from 'axios';
import { observer } from 'mobx-react'

export default observer((props) => {
        const classes = useStyles(),
            userStore = useContext(UserStoreContext),
            { UserData } = userStore;

    const handleBuy = async () => {
        const { data } = await Axios.put(`/api/purchase`, {
            user: UserData._id, // maybe _id
            cartItems: UserData.cart
        });

        // reset cart items
        userStore.ClearCart();

        // TODO: add snackbar - not sure
    }

    return (<>
        <CssBaseline />
        <Navbar />
        <Grid container justify="center">
            {(UserData && UserData.cart.length > 0) ?
                <>
                    <Grid item sm={6} container direction="column" alignItems="flex-start" spacing={2}>
                        <Grid item>
                            <Typography variant="h3" gutterBottom>עגלת הקניות</Typography>
                        </Grid>
                        {UserData.cart.map((cartItem, index) => (
                            //purchase.cartItems.map(cartItem => (
                            <Grid item sm={6} key={index}>
                                {/* <CartItemCard purchase={{
                                ...purchase,
                                ...cartItem,
                                cartItems: undefined,
                                '_id': cartItem._id,
                                purchaseId: purchase._id,
                                }} /> */}
                                <CartItemCard cartItem={cartItem} />
                            </Grid>
                            //))
                        ))}
                    </Grid>
                    <Grid item sm={2}>
                            {/* TODO: dagan change path to payment or add snackbar of success */}
                            <Button
                                color='primary'
                                fullWidth
                                variant='contained'
                                className={classes.button}
                                onClick={handleBuy}
                            >
                                {'קנייה'}
                            </Button>
                            <Button
                                component={Link}
                                to='/'
                                fullWidth
                                color='primary'
                                variant='outlined'
                                className={classes.button}
                            >
                                {'המשך קניות'}
                            </Button>
                        </Grid>
                </>
                :
                // empty cart
                <Grid item sm={6} container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <Typography variant='h6'>עוד לא הוספת כלום לעגלה</Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/"
                            color='primary'
                            variant='contained'
                            className={classes.button}
                            onClick={handleBuy}
                        >
                            {'להתחלת הקניות'}
                        </Button>
                    </Grid>
                </Grid>}
        </Grid>
    </>);
})

const useStyles = makeStyles((theme) => ({
                button: {
                margin: '10px',
        padding: '10px',
        height: 'fit-content',
    }
}));