import React from "react";
import useStyles from "./reviews-dialog.css";
import {Rating} from '@material-ui/lab';
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
  TextField
} from "@material-ui/core";
import {formatDate} from '../../../../../../common/Util';

export default ({ onClose, open, ip }) => {
  const classes = useStyles();
  const [writeReview, setwriteReview] = React.useState(false);

  const addReview = () => {
    setwriteReview(true);
  };

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
        { !writeReview ? null :  <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>

              </Avatar>
            }
            title="username"
            subheader={formatDate(new Date())}
          />
          <CardContent className={classes.cardContent}>
            <TextField labelWidth={60} id="review" label="ביקורת" variant="outlined" />
            <Rating value={5} />
          </CardContent>
        </Card>
        }
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
              <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="textPrimary" component="p">
                  {review.comment}
                </Typography>
                <Rating value={review.scoring} readOnly />
              </CardContent>
            </Card>
          ))}
        {writeReview ? null : <Button variant='outlined' color="primary" onClick={() => addReview()}>
          הוסף ביקורת
        </Button>}
      </div>
    </Dialog>
  );
};
