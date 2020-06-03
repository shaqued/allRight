import React from 'react';
import AnotherWaveForm from '../../../../../assets/photos/AnotherWaveForm.png';
import Mergui from '../../../../../assets/photos/Mergui.png';
import Ariana from '../../../../../assets/photos/Image -1@2x.png'
import useStyles from './ip-description.css';
import { Box, Grid, Typography } from '@material-ui/core';
import Color from "color-thief-react";

export default ({ ip }) => {
    const classes = useStyles();

    return (
        <Color src={Mergui}>
            {({ data, loading }) => {
                if (loading) return <div>noa hayta kan</div>;
                return (
                    <Grid container spacing={0} style={{ backgroundColor: data, height: '30%' }}>
                        <Grid item xs={8} style={{ margin: '2%' }}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Grid container direction='column'>
                                                <Grid item>
                                                    <Typography variant="h2" color="textSecondary">
                                                        {ip.name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h4" color="textSecondary">
                                                        {ip.performer}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body1" color="textSecondary">
                                                        {ip.about}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="body1" color="textSecondary" style={{ textAlign: 'left' }}>מילים: {ip.writer}</Typography>
                                            <Typography variant="body1" color="textSecondary" style={{ textAlign: 'left' }}>לחן: {ip.composer}</Typography>
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
                );
            }}
        </Color>
    )
}