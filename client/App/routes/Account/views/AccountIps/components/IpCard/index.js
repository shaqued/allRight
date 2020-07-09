import songPicture from 'assets/photos/songPicture.jpg';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Card, Typography, Grid,
    CardMedia, CardActions, IconButton
} from '@material-ui/core';
import { Delete as DeleteIcon, Block as BlockIcon, Edit as EditIcon } from '@material-ui/icons';
import { getDisplayDate, convertDataToImage } from 'common/Util';
import Axios from 'axios';

export default function ({ ip }) {
    const classes = useStyles(),
        [profit, setProfit] = useState(0);
    
    useEffect(() => {
        fetchProfit()
    }, []);

    const fetchProfit = async () => {
        try {
            const { data } = await Axios.get(`api/purchase/profits/${ip._id}`);
            setProfit(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                component="img"
                src={convertDataToImage(ip.image.data.data)}
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
                        { (profit > 0) ? 
                            <>
                                <Typography variant="h3" align="left">{"₪" + profit}</Typography>
                                <Typography variant="body1" align="left">{"רווחים מהשיר עד כה"}</Typography>
                            </>
                            :
                            <Typography variant="body1" align="left" gutterBottom>{"עוד אין לך רווחים מהשיר הזה"}</Typography>
                        }
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