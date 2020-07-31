import React from "react";
import useStyles from "./reviews-dialog.css";
import {
  Dialog,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@material-ui/core";

export default ({ onClose, open, ip }) => {
  const classes = useStyles();

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialog}>
        <div>
          <Typography>הוספה לסל התסיימה בהצלחה</Typography>
        </div>
      </div>
    </Dialog>
  );
};
