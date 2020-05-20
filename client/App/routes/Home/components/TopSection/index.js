import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';
import tapeImage from '../../../../../assets/photos/Tape.png'

export default () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Typography>{'text'}</Typography>
            </Box>
            <img src={tapeImage} className={classes.tape} />
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        maxHeight: '415px'
    },
    tape: {
        maxWidth: '415px'
    },
    content: {
        backgroundColor: 'rgb(81,122,106)',
        width: '100%'
    }
});