import React, { useContext } from 'react';
import { Box, Avatar, IconButton, Tooltip, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';

export default ({ isHomepage }) => {
    const classes = useStyles();
    const userStore = useContext(UserStoreContext);
    const userInitials = userStore.UserData.name.first[0]; //+ userStore.UserData.name.last[0];

    const signout = (e) => {
        e.preventDefault();

        userStore.LogOff();
    };

    return (
        <Box className={classes.continer}>
            <Avatar component={Link} to='/account'>{userInitials}</Avatar>
            <Tooltip title='עגלת הקניות'>
                <IconButton component={Link} to='/cart'>
                    <ShoppingCartIcon className={`${isHomepage ? classes.lightIcon : classes.darkIcon}`}/>
                </IconButton>
            </Tooltip>
            <Tooltip title='התנתק'>
                <IconButton onClick={signout}>
                    <ExitToAppIcon className={`${isHomepage ? classes.lightIcon : classes.darkIcon}`} />
                </IconButton>
            </Tooltip>
        </Box>
    )
};

const useStyles = makeStyles((theme) => ({
    continer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '150px',
        direction: "initial"
    },
    lightIcon: {
        color: theme.palette.text.secondary
    },
    darkIcon: {
        color: theme.palette.text.primary
    }
}));