import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ({ onClose, severity, open, children }) {
    return (<Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert variant="filled" onClose={onClose} severity={severity}>
            {children}
        </Alert>
    </Snackbar>)
}