import React from 'react';
import { Typography, CardContent, Card, CardMedia, CardActionArea } from '@material-ui/core';

export default ({ classes, image: { contentType, data }, name, performer, onClick }) => {
    return (
        <Card className={classes.card} onClick={onClick}>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    src={`data:${contentType};base64, ${data}`}
                    title={name}
                    className={classes.media}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                        {name}
                    </Typography>
                    <Typography variant="body1">
                        {performer}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
