import React from 'react'
import { Box, Typography, makeStyles, Link } from '@material-ui/core';
import tapeImage from '../../../../../assets/photos/Tape.png'
import Search from './components/Search'

export default () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.centered}>
                <Box className={classes.content}>
                    <Typography variant={'h1'} className={classes.title}>
                        {'מצאו את השירים והאמנים האהובים עליכם'}
                    </Typography>
                    <Typography variant={'body2'} className={classes.text} gutterBottom>
                        {'קבלו רישיון לשימוש ביצירות בקליק'}
                    </Typography>
                    <Search />
                    <Box display={'flex'}>
                        <Typography variant={'body1'} className={classes.text} gutterBottom>
                            {'מעוניינים להעלות את היצירות שלכם?'}
                        </Typography>
                        <Link variant={'body1'} color={'secondary'} className={classes.text} gutterBottom>
                            {'הצטרפו אלינו בקליק'}
                        </Link>
                    </Box>
                </Box>
                <img src={tapeImage} className={classes.tape} />
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        maxHeight: '415px',
        backgroundColor: 'rgb(81,122,106)',
    },
    centered: {
        display: 'flex',
        width: '1000px',
        justifyContent: 'space-between'
    },
    tape: {
        maxWidth: '415px'
    },
    content: {
        width: '100%',
        padding: '20px',
        color: 'white',
    },
    title: {
        lineHeight: '1.3'
    },
    text: {
        paddingTop: '15px',
        paddingLeft: '5px'
    },
    search: {
        height: '55px',
        width: '400px'
    }
});