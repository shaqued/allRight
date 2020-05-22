import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default () => {
    const classes = useStyles();

    return (
        <Grid container style={{height: '40%' }}>
            <CssBaseline />
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'חברתי' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'פרטי' ? <StarIcon /> : null}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography variant="h6" color="textSecondary">
                                            החל מ-
                                            <Typography component="h2" variant="h3" color="textPrimary">{tier.price}₪</Typography>
                                            /לחודש
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" color="textSecondary" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Button variant={tier.buttonVariant} color="primary">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
}));

const tiers = [
    {
        title: 'פרטי',
        price: '10',
        description: [
            'אירועים אישיים, סרטונים לשימוש אישי,',
            'לחברים במשרד ועוד.'
        ],
        buttonText: 'קבלת רשיון',
        buttonVariant: 'outlined',
    },
    {
        title: 'חברתי',
        price: '50',
        description: [
            'מתאים לשימוש בסטוריז, פוסטים או סרטונים.'
        ],
        buttonText: 'קבלת רשיון',
        buttonVariant: 'contained',
    },
    {
        title: 'עסקי',
        price: '100',
        description: [
            'דיג\'יים, מפיקים מתחילים, להקות -',
            'זה בשבילכם.'
        ],
        buttonText: 'קבלת רשיון',
        buttonVariant: 'outlined',
    },
];