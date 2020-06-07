import React from 'react'
import { Box, Typography, makeStyles, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import clsx from 'clsx';

export default () => {
    const classes = useStyles();

    return (
        <Box className={classes.search}>
            <SearchIcon className={classes.icon} />
            <Input placeholder={'שיר, אמן או אלבום...'} className={classes.input} disableUnderline />
            <ArrowRightAltIcon className={clsx(classes.icon, classes.flippped)} />
        </Box>
    )
}

const useStyles = makeStyles({
    search: {
        height: '40px',
        width: '400px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 10px'
    },
    flippped: {
        '-webkit-transform': 'scaleX(-1)',
        transform: 'scaleX(-1)',
    },
    icon: {
        color: 'black'
    },
    input: {
        display: 'flex',
        flexGrow: 2,
        paddingRight: '5px'
    }
});