import React, { useState } from "react";
import AnotherWaveForm from "../../../../../assets/photos/AnotherWaveForm.png";
import useStyles from "./ip-description.css";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import Color from "color-thief-react";
import ReviewsDialog from "./reviews-dialog";

export default ({ ip }) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const image = ip.image ? `data:${ip.image.contentType};base64, ${ip.image.data}` : "";

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<Grid item container>
        <Color src={image}>
            {({ data, loading }) => {
                if (!loading)
                    return (
                        <Grid container spacing={0} style={{ backgroundColor: data }}>
                            <Grid item xs={8} style={{ marginRight: "2%", marginTop: "2%" }}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Grid container direction="column">
                                                    <Grid item>
                                                        <Typography variant="h2" color="textSecondary">
                                                            {ip.name}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="h3" color="textSecondary">
                                                            {ip.performer}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant={"subtitle1"}
                                                            color="textSecondary"
                                                        >
                                                            {ip.about}
                                                        </Typography>
                                                    </Grid>
                                                    <Button
                                                        variant="outlined"
                                                        color="primary"
                                                        onClick={() => handleClickOpen()}
                                                    >
                                                        ביקורות
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={3}></Grid>
                                            <Grid item xs={3}>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="textSecondary"
                                                    style={{ textAlign: "left" }}
                                                >
                                                    מילים: {ip.writer}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="textSecondary"
                                                    style={{ textAlign: "left" }}
                                                >
                                                    לחן: {ip.composer}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        spacing={1}
                                        style={{ alignItems: "center" }}
                                    >
                                        <Grid xs={7} item>
                                            <Box
                                                component="img"
                                                src={AnotherWaveForm}
                                                className={classes.wave}
                                            />
                                        </Grid>
                                        <Grid xs={3} item display="flex">
                                            <audio
                                                controls
                                                controlsList="nodownload"
                                                src={ip.sample}
                                                className={classes.sample}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                display="flex"
                                className={classes.imageContainer}
                            >
                                <Box component="img" src={image} className={classes.image} />
                            </Grid>
                            <ReviewsDialog ip={ip} open={open} onClose={handleClose} />
                        </Grid>
                    );
            }}
        </Color>
    </Grid>);
};
