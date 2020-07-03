import songPicture from 'assets/photos/songPicture.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Card, Typography, Grid,
    CardMedia, CardActions, IconButton
} from '@material-ui/core';
import { Delete as DeleteIcon, Block as BlockIcon, Edit as EditIcon } from '@material-ui/icons';
import { getDisplayDate } from 'common/Util';

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
            price: 2555,
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
        profit = 2250;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                component="img"
                src={songPicture}
            />
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
                {/* action and earning */}
                <Grid item className='classes.leftCardSection'>
                    <div className={classes.profit}>
                        <Typography variant="h3" align="left">{"₪" + profit}</Typography>
                        <Typography variant="body1" align="left">{"רווחים מהשיר עד כה"}</Typography>
                    </div>
                    <CardActions disableSpacing>
                        <IconButton className={classes.iconButton}>
                            <EditIcon />
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <BlockIcon />
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxHeight: 140
    },
    cardContent: {
        padding: theme.spacing(3),
    },
    leftCardSection: {
        alignSelf: 'flex-end'
    },
    cover: {
        height: 140,
        width: 140
    },
    profit: {
        marginLeft: theme.spacing(2)
    },
    iconButton: {
        paddingLeft: '0!important', 
    }
}));