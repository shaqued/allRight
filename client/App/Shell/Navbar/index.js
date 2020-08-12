import whiteLogo from 'assets/icons/AllrightWhiteLogo.png';
import blackLogo from 'assets/icons/AllrightBlackLogo.png';
import React, {useContext} from 'react';
import { observer } from 'mobx-react'
import { Box, Button, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';
import UnsingedButtons from './UnsingedButtons'
import SignedUser from './SingedUser'


export default observer(({ isHomepage }) => {
    const classes = useStyles();
    const userStore = useContext(UserStoreContext);

    console.log(userStore.UserData);

    return (
        <Box className={`${classes.centered} ${isHomepage? classes.homepageBackground : ''}`}>
            <CssBaseline />
            <Box className={classes.header}>
                {userStore.UserData ? <SignedUser /> : <UnsingedButtons isHomepage={isHomepage}/>}
                <Box>
                    <Button component={Link} to='/'>
                        <img src={isHomepage ? whiteLogo : blackLogo} className={classes.logo} />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
});

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        paddingLeft: '20px',
        height: '80px',
        alignItems: 'center',
        width: '100%'
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
    },
    homepageBackground: {
        backgroundColor: theme.palette.background.homepage,
    },
    logo: {
        maxHeight: '60px',
        marginRight: theme.spacing(2)
    }
}));
