import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function ({ handleClose, handleDelete, isOpen, ipName}) {
    const classes = useStyles();
    return (
        <div>
            <Dialog
                //open={isOpen}
                open
                fullWidth
                maxWidth="xs"
                onClose={handleClose}
            >
                <DialogTitle disableTypography color="primary">
                    <Typography variant="h5">{`למחוק את היצירה ${ipName}?`}</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1" color="textPrimary">
                        לא תוכלו לשחזר אותה בעתיד (או שאולי כן)
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="text" color="textPrimary" className={classes.textButton}>
                        כן, אני רוצה למחוק
                    </Button>
                    <Button onClick={handleDelete} variant="contained" color="primary" autoFocus>
                        לא
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    textButton: {
        marginLeft: theme.spacing(1),
        letterSpacing: 0
    }
}));