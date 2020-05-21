import React from 'react';
import AnotherWaveForm from '../../../../../assets/photos/AnotherWaveForm.png';
import Mergui from '../../../../../assets/photos/Mergui.png';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';

export default () => {
    const classes = useStyles();

    return (
        <Grid container style={{ backgroundColor: 'steelBlue', overflowX: 'hidden', height: '100%' }}>
            <Grid item xs={12} className={classes.Vpedding} />
            <Grid item xs={10}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container>
                            <Grid item xs={3}>
                                <Grid container direction='column'>
                                    <Grid item>
                                        <Typography variant="h2" color="textPrimary">אסור</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h4" color="textPrimary">מרגי</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" color="textPrimary">
                                            תני לי רגע הוא סינגל הבכורה של הזמר-יוצר הישראלי יהונתן מרגי. השיר יצא לאור ב-12 באוגוסט 2018, כסינגל שלא מתוך אלבום, על ידי חברות התקליטים טדי הפקות וגאגא בוקינג.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1" color="textPrimary">לפני שעתיים</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={3}>
                                <Typography variant="body1" color="textPrimary" style={{ textAlign: 'left' }}>מילים: לדגכלדג דלגכלדג לדגכל ד</Typography>
                                <Typography variant="body1" color="textPrimary" style={{ textAlign: 'left' }}>לחן: לדגכלדג דלגכלדג לדגכל ד</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Box className={classes.container}>
                            <img src={AnotherWaveForm} className={classes.wave} />
                        </ Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Grid container alignItems='center'>
                    <Grid item xs={12}>
                        <Box className={classes.container}>
                            <img src={Mergui} className={classes.ipPhoto} />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.Vpedding} />
        </Grid>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        maxHeight: '415px',
        textAlign: 'center'
    },
    wave: {
        width: '100%',
        maxHeight: '120px'
    },
    ipPhoto: {
        maxWidth: '290px',
        display: 'block',
        marginRight: 'auto',
    },
    content: {
        backgroundColor: 'rgb(81,122,106)',
        width: '100%'
    },
    Vpedding: {
        minHeight: '35px'
    }
});