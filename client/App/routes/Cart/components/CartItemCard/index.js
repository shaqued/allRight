import songPicture from 'assets/photos/songPicture.jpg';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Card, Typography, Grid, Divider,
    CardMedia, CardActions, IconButton, Link
} from '@material-ui/core';
import { Share as ShareIcon } from '@material-ui/icons';
import { getDisplayDate, convertDataToImage } from 'clientCommon/Util';
import Axios from 'axios';
import MediaType from 'common/mediaType';
import UsageType from 'common/usageType';

export default function ({ purchase }) {
    const classes = useStyles(),
        [ip, setIp] = useState({});

    useEffect(() => {
        fetchIp()
    }, []);

    const fetchIp = async () => {
        try {
            const { data } = await Axios.get(`/api/ip/${purchase.ipId}`);
            setIp(data);
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <Card className={classes.root}>
            <Grid container direction="column">
                <Grid item className={classes.topCardSection}>
                    <Link to="/">
                        <CardMedia
                            className={classes.cover}
                            component="img"
                            src={ip.image ? convertDataToImage(ip.image.data.data) : songPicture}
                        />
                    </Link>
                    <Grid container justify="space-between" alignContent='space-between' className={classes.cardContent}>
                        {/* song details */}
                        <Grid item>
                            <Typography component="h3" variant="h3" gutterBottom>
                                {ip.name}
                            </Typography>
                        </Grid>
                        {/* action and price */}
                        <Grid item className='classes.leftCardSection'>
                            <div className={classes.price}>
                                <Typography variant="body1" align="left">{"עלות השימוש"}</Typography>
                                <Typography variant="h3" align="left">{"₪" + purchase.range.price}</Typography>
                            </div>
                            <CardActions disableSpacing>
                                <IconButton className={classes.iconButton}>
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
                {/* card footer */}
                <Grid item className={classes.cardFooter}>
                    <Grid container justify="space-between" spacing={2}>
                        <Grid item>
                            <Typography variant="subtitle1" display="inline">{"לשימוש "}</Typography>
                            <Typography variant="subtitle2" display="inline">{`${UsageType[purchase.range.usageType]}, ${MediaType[purchase.range.mediaType]}`}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" display="inline">{"עד "}</Typography>
                            <Typography variant="subtitle2" display="inline">{purchase.range.rangeMax}</Typography>
                            <Typography variant="subtitle1" display="inline">{" מאזינים"}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxHeight: 250,
        maxWidth: 600
    },
    cardContent: {
        padding: theme.spacing(3),
    },
    leftCardSection: {
        alignSelf: 'flex-end'
    },
    cardFooter: {
        padding: theme.spacing(1, 2)
    },
    cover: {
        height: 140,
        width: 140
    },
    price: {
        marginLeft: theme.spacing(2)
    },
    iconButton: {
        paddingLeft: '0!important',
    },
    topCardSection: {
        display: 'flex',
        maxHeight: 140,
    }
}));