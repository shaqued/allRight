import React from 'react';
import AnotherWaveForm from '../../../../../assets/photos/AnotherWaveForm.png';
import Mergui from '../../../../../assets/photos/Mergui.png';
import useStyles from './ip-description.css';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';

export default () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} style={{ backgroundColor: 'steelBlue', height: '30%' }}>
            <Grid item xs={8} style={{ margin: '2%' }}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container>
                            <Grid item xs={4}>
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
                            <Grid item xs={2}></Grid>
                            <Grid item xs={3}>
                                <Typography variant="body1" color="textPrimary" style={{ textAlign: 'left' }}>מילים: לדגכלדג דלגכלדג לדגכל ד</Typography>
                                <Typography variant="body1" color="textPrimary" style={{ textAlign: 'left' }}>לחן: לדגכלדג דלגכלדג לדגכל ד</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Box component="img" src={AnotherWaveForm} className={classes.wave} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} display="flex" className={classes.imageContainer}>
                <Box component="img" src={Mergui} className={classes.image} />
            </Grid>
        </Grid>
    )
}