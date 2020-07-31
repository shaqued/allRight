import React from "react";
import useStyles from "./reviews-dialog.css";
import {
  Dialog,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  CardActions,
} from "@material-ui/core";
import {formatDate} from '../../../../../../common/Util';

export default ({ onClose, open, ip }) => {
  const classes = useStyles();

  const getUserInitials = (userName) => {
    console.log(ip.reviews);
    if (userName) {
      const fullName = userName.split(" ");
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      return initials.toUpperCase();
    }

    return "";
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialog}>
        {ip.reviews &&
          ip.reviews.map((review) => (
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    {getUserInitials(review.userName)}
                  </Avatar>
                }
                title={review.userName}
                subheader={formatDate(new Date(review.creationDate))}
              />
              <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                  {review.comment}
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>
            </Card>
          ))}
      </div>
    </Dialog>
  );
};
