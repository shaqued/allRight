import React from 'react'
import { Box, Typography, makeStyles, CardContent, Card, CardMedia, CardActionArea } from '@material-ui/core'

const MyCard = ({ classes, image, title, artist }) => {
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    image={image}
                    title={title}
                    className={classes.media}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="body2">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {artist}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default () => {
    const classes = useStyles();

    const songs = [
        {
            image: 'https://i1.wp.com/www.rollingstone.com/wp-content/uploads/2020/02/TheWeeknd.jpg?ssl=1',
            title: 'Blinding Lights',
            artist: 'The Weekend'
        },
        {
            image: 'https://i1.sndcdn.com/artworks-000610036000-8c83jy-t500x500.jpg',
            title: 'Dance Monkey',
            artist: 'Tones & I'
        },
        {
            image: 'https://i.ytimg.com/vi/jlCNqyY-fAk/maxresdefault.jpg',
            title: 'אלוף העולם',
            artist: 'חנן בן ארי'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/he/d/dd/Don%27t_Start_Now.jpg',
            title: `Don't Start Now`,
            artist: 'Dua Lipa'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/he/e/e6/%D7%90%D7%9D_%D7%90%D7%AA%D7%94_%D7%92%D7%91%D7%A8.jpg',
            title: 'אם אתה גבר',
            artist: 'נועה קירל'
        }
    ]

    return (
        <Box className={classes.container}>
            <Typography variant={'h2'} className={classes.title}>{'הנצפים ביותר'}</Typography>

            <Box className={classes.content}>
                {songs.map(ip =>
                    <MyCard classes={classes} {...ip} key={`${ip.title}${ip.artist}`} />
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