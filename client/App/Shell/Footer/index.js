import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import colmanLogo from '../../../assets/icons/unnamed@2x.png'

export default () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <img src={colmanLogo} className={classes.logo} />
            <Typography variant='body1' className={classes.text}>
                {`Dagan Naar, Ido Perach, Noa Fridman, Shaqued Gavriel, Amit Nativ @`}
            </Typography>
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgb(158,158,158)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 30px'
    },
    logo: {
        maxWidth: '65px',
        padding: '10px 0px'
    },
    text: {
        color: 'white',
    }
})