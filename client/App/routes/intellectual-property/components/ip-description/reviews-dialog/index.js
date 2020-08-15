import React, { useContext, useEffect } from "react";
import useStyles from "./reviews-dialog.css";
import { Rating } from "@material-ui/lab";
import { UserStoreContext } from "stores/UserStore/UserStoreProvider";
import {mean, ceil} from 'lodash';
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
  TextField,
  IconButton,
} from "@material-ui/core";
import Axios from "axios";
import history from "../../../../../../history";

export default ({ onClose, open, ip }) => {
  const classes = useStyles();

  const calculateAverageScore = () => {
    if (reviews && reviews.length != 0){
      return ceil(mean(reviews.map(x => x.scoring)), 2);
    } else {
      return 0;
    }
  }

  const [writeReview, setwriteReview] = React.useState(false);
  const [reviews, setReviews] = React.useState(ip && ip.reviews);
  const [totalScore, setTotalScore] = React.useState(calculateAverageScore());
  const [newScoring, setNewScoring] = React.useState(0);
  const [newComment, setNewComment] = React.useState("");
  
  const userStore = useContext(UserStoreContext);
  const loggedUserInitials =
    userStore.UserData && (userStore.UserData.name.first[0] + userStore.UserData.name.last[0]);
  const loggedUserName =
    userStore.UserData && (userStore.UserData.name.first + " " + userStore.UserData.name.last);

  const handleCommentChange = ({ target: { value } }) => setNewComment(value);
  const handleScoringChange = ({ target: { value } }) => setNewScoring(value);

  const toggleAddReview = () => {
    setwriteReview(!writeReview);
  };

  const addReview = async () => {
    try {
      const newReview = {
        user: userStore.UserData,
        comment: newComment,
        scoring: parseInt(newScoring),
      };

      const response = await Axios.put(
        `/api/ip/${ip._id}/addComment`,
        newReview
      );

      if (response && response.status === 200) {
        toggleAddReview();
        setReviews([...reviews, { ...newReview, userName: loggedUserName }]);
        setNewScoring(0);
        setNewComment("");
        setTotalScore(calculateAverageScore());
      }
    } catch (e) {
      alert("לא הצלחנו לשמור את התגובה, נסו שוב במועד מאוחד יותר");
      console.log(e);
    }
  };

  const getUserInitials = (userName) => {
    if (userName) {
      const fullName = userName.split(" ");
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      return initials.toUpperCase();
    }

    return "";
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <Typography variant={"h2"} className={classes.root} gutterBottom>
        {'ציון משוקלל: ' + totalScore}
      </Typography>
      <Rating value={totalScore} precision={0.5} className={classes.totalRating} readOnly/>
      <div className={classes.dialog}>
        {!writeReview ? null : (
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  {" "}
                  {loggedUserInitials}
                </Avatar>
              }
              title={
                userStore.UserData.name.first +
                " " +
                userStore.UserData.name.last
              }
            />
            <CardContent className={classes.cardContent}>
              <TextField
                value={newComment}
                onChange={handleCommentChange}
                labelWidth={60}
                id="review"
                label="ביקורת"
                variant="outlined"
              />
              <Rating value={newScoring} onChange={handleScoringChange} />
              <Button
                variant="outlined"
                color="primary"
                onClick={() => addReview()}
              >
                שמור
              </Button>
            </CardContent>
            <CardActions disableSpacing className={classes.exitButton}>
              <IconButton aria-label="close" onClick={() => toggleAddReview()}>
                X
              </IconButton>
            </CardActions>
          </Card>
        )}
        {reviews &&
          reviews.map((review) => (
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    {getUserInitials(review.userName)}
                  </Avatar>
                }
                title={review.userName}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="textPrimary" component="p">
                  {review.comment}
                </Typography>
                <Rating value={review.scoring} readOnly />
              </CardContent>
            </Card>
          ))}
        {userStore.UserData && !writeReview ? (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => toggleAddReview()}
          >
            הוסף ביקורת
          </Button>
        ) : null}
      </div>
    </Dialog>
  );
};
