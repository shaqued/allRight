import React from 'react';
import useStyles from './licenses-plan.css';
import {Grid, Container, Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Typography} from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';

export default ({ip}) => {
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