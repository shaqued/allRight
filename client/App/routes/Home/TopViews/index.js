import React, { useState, useEffect } from 'react'
import { Box, Typography, makeStyles, CardContent, Card, CardMedia, CardActionArea } from '@material-ui/core'
import Axios from 'axios'
import history from '../../../../history'

const IpCard = ({ classes, image: { contentType, data }, name, performer, onClick }) => {
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

export default () => {
    const classes = useStyles();

    const [ips, setIps] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            const { data } = await Axios.get('/api/ip',
                {
                    params: {
                        popular: true
                    }
                }
            );

            setIps(data);
        } catch (e) {
            console.log(e);
            setIps([]);
        }
    };

    const goToIp = (id) => {
        history.push(`/ip/${id}`);
    }

    return (
        <Box className={classes.container}>
            <Typography variant={'h2'} className={classes.title}>{'הנצפים ביותר'}</Typography>

            <Box className={classes.content}>
                {ips.map(ip =>
                    <IpCard classes={classes} {...ip} key={`${ip._id}`} onClick={() => goToIp(ip._id)} />
                )}
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        padding: '32px 0px',
        width: '1000px'
    },
    card: {
        boxShadow: 'none',
        borderRadius: 0,
        backgroundColor: 'transparent',
        width: '175px',
        paddingLeft: '7px',
        display: 'inline-block'
    },
    cardContent: {
        padding: 0
    },
    media: {
        height: '150px'
    },
    content: {
        overflow: 'auto',
        whiteSpace: 'nowrap',
        width: '1000px',
        paddingBottom: '50px'
    }
})