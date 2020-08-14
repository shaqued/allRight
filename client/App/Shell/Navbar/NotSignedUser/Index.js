import React from 'react'
import { Box, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

export default ({ isHomepage }) => {
    const classes = useStyles();
    
    return (
        <Box display={'flex'} flexDirection={'row-reverse'}>
            <Button
                component={Link}
                to='/signUp'
                color='primary'
                variant='contained'
                className={classes.button}
            >
                {'הצטרפו אלינו'}
            </Button>
            <Button component={Link} to='/signIn'
                className={`${isHomepage ? classes.lightText : classes.darkText} 
                    ${classes.button}`}
            >
                {'כניסת משתמשים'}
            </Button>
            <Button component={Link} to='/signUp'
                className={`${isHomepage ? classes.lightText : classes.darkText} 
                    ${classes.button} ${classes.bold}`}>
                {'הצטרפות כיוצרים'}
            </Button>
        </Box>)
}

const useStyles = makeStyles((theme) => ({
    button: {
        margin: '10px',
        padding: '10px',
        height: 'fit-content',
    },
    lightText: {
        color: theme.palette.text.secondary
    },
    darkText: {
        color: theme.palette.text.primary
    },
    bold: {
        fontWeight: "bold"
    }
}));