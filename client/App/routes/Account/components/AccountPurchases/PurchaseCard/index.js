import songPicture from 'assets/photos/songPicture.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Card, Typography, Grid, Divider,
    CardMedia, CardActions, IconButton, Link
} from '@material-ui/core';
import { Share as ShareIcon } from '@material-ui/icons';
import { getDisplayDate } from 'common/Util';

const UsageType = {
    onlyme: 'אישי',
    single: 'בודד',
    multiple: 'מרובה'
};

const MediaType = {
    online: 'Online',
    offline: 'Offline'
};

export default function (props) {
    const classes = useStyles(),
        ip = {
            name: 'השיר של עידו',
            category: 'pop',
            tag: ['happy', 'love'],
            composer: 'Lizzo',
            performer: 'Lizzo',
            writer: ' Lizzo, Theron Thomas, Sam Sumser, Sean Small and Ricky Reed',
            owners: [{ user: 123, percentageOfOwnership: 100 }],
            dateOfCreation: new Date('2019-01-04'),
            price: 130,
            reviews: [
                { user: 123, comment: 'great!', scoring: 5 },
                { user: 123, comment: 'The best', scoring: 4 }
            ],
            about: 'Juice is a song recorded by American singer and rapper Lizzo.',
            type: 'music',
            sample: 'https://www.youtube.com/watch?v=XaCrQL_8eMY',
            image: {
                contentType: 'image/jpeg',
                data: {
                    type: 'Buffer',
                    data: []
                }
            }
        },
        purchase = {
            user: 123,
            cartItems: [{
                ipId: 123,
                range: {
                    rangeMin: 1,
                    rangeMax: 40,
                    mediaType: 'online',
                    usageType: 'onlyme',
                    price: 100
                }
            }
            ]
        };

    return (
        <Card className={classes.root}>
            <Grid container direction="column">
                <Grid item className={classes.topCardSection}>
                    <Link to="/">
                        <CardMedia
                            className={classes.cover}
                            component="img"
                            src={songPicture}
                        />
                    </Link>
                    <Grid container justify="space-between" alignContent='space-between' className={classes.cardContent}>
                        {/* song details */}
                        <Grid item>
                            <Typography component="h3" variant="h3" gutterBottom>
                                {ip.name}
                            </Typography>
                            <Typography variant="body1">
                                {`נוסף ב-${getDisplayDate(ip.dateOfCreation)}`}
                            </Typography>
                        </Grid>
                        {/* action and price */}
                        <Grid item className='classes.leftCardSection'>
                            <div className={classes.price}>
                                <Typography variant="body1" align="left">{"עלות השימוש"}</Typography>
                                <Typography variant="h3" align="left">{"₪" + purchase.cartItems[0].range.price}</Typography>
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
                            <Typography variant="subtitle2" display="inline">{`${UsageType[purchase.cartItems[0].range.usageType]}, ${MediaType[purchase.cartItems[0].range.mediaType]}`}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" display="inline">{"עד "}</Typography>
                            <Typography variant="subtitle2" display="inline">{purchase.cartItems[0].range.rangeMax}</Typography>
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
        maxHeight: 250
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