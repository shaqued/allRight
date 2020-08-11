import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
    Card, Typography, Grid, CardMedia, CardActions, IconButton
} from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import { getDisplayDate, convertDataToImage } from 'clientCommon/Util';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import DeleteDialog from '../DeleteDialog';
import Alert from 'components/Alert';

export default function ({ ip }) {
    const classes = useStyles(),
        history = useHistory(),
        snackbarMessages = {
            success: "היצירה נמחקה בהצלחה",
            error: "אוי לא, משהו השתבש. נסו שנית מאוחר יותר"
        },  
        [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false),
        [profit, setProfit] = useState(0),
        [showSnackbar, setShowSnackbar] = useState(false),
        [deleteStatus, setDeleteStatus] = useState('');

    useEffect(() => {
        fetchProfit()
    }, []);

    const fetchProfit = async () => {
        try {
            const { data } = await Axios.get(`/api/purchase/profits/${ip._id}`);
            setProfit(data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleDeleteClick = () => {
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setIsDeleteDialogOpen(false);
    };

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowSnackbar(false);
    };

    const deleteIp = async () => {
        try {
            const response = await Axios.delete(`/api/ip/${ip._id}`);
            setShowSnackbar(true);
            respone.status == 200 ? setDeleteStatus('success') : setDeleteStatus('error');
        } catch (e) {
            setDeleteStatus('error')
            setShowSnackbar(true);
            console.log(e);
        }
    }

    const handleEditClick = () => {
        history.push(`/ip/${ip._id}/edit`);
    }

    return (<>
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
                        {(profit > 0) ?
                            <>
                                <Typography variant="h3" align="left">{"₪" + profit}</Typography>
                                <Typography variant="body1" align="left">{"רווחים מהשיר עד כה"}</Typography>
                            </>
                            :
                            <Typography variant="body1" align="left" gutterBottom>{"עוד אין לך רווחים מהשיר הזה"}</Typography>
                        }
                    </div>
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton onClick={handleEditClick} className={classes.iconButton}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={handleDeleteClick} className={classes.iconButton}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
        <DeleteDialog handleClose={handleDeleteDialogClose} isOpen={isDeleteDialogOpen}
            handleDelete={deleteIp} ipName={ip.name} />
        <Alert open={showSnackbar} onClose={handleSnackClose} severity={deleteStatus}>
            {snackbarMessages[deleteStatus]}
        </Alert>
    </>
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
    cardActions: {
        justifyContent: "flex-end"
    },
    iconButton: {
        //paddingLeft: '0!important',
    }
}));