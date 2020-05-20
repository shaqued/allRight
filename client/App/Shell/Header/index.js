import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import logo from '../../../assets/icons/AllrightLogo.png'
import { Link } from 'react-router-dom'

export default () => {
    const classes = useStyles();

    return (
        <Box className={classes.header}>
            <Box display={'flex'} flexDirection={'row-reverse'}>
                <Button
                    component={Link}
                    to='/signIn'
                    className={clsx(classes.pinkButton, classes.button)}>
                    <Typography className={classes.text}>
                        {'הצטרפו אלינו'}
                    </Typography>
                </Button>
                <Button className={classes.button}>
                    <Typography className={classes.text}>
                        {'כניסת משתמשים'}
                    </Typography>
                </Button>
                <Button className={classes.button}>
                    <Typography className={clsx(classes.text, classes.bold)}>
                        {'הצטרפות כיוצרים'}
                    </Typography>
                </Button>
            </Box>
            <Box>
                <Button component={Link} to='/'>
                    <img src={logo} className={classes.logo} />
                </Button>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        backgroundColor: 'rgb(81,122,106)',
        paddingLeft: '20px',
        height: '80px',
        alignItems: 'center'
    },
    text: {
        color: 'white',
    },
    button: {
        margin: '10px',
        padding: '10px',
        height: 'fit-content'
    },
    pinkButton: {
        backgroundColor: 'rgb(240,149,175)',
    },
    bold: {
        fontWeight: 800
    },
    logo: {
        maxHeight: '60px'
    }
}))
