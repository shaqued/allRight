import React from 'react';
import useStyles from './licenses-plan.css';
import LicensePlanDialog from './license-plan-dialog';
import { Grid, Container, Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import { min } from 'lodash';

export default ({ ip }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [priceRange, setPriceRange] = React.useState([]);

    let plansDictionary = {
        privateRangePrice: 'פרטי',
        socialRangePrice: 'חברתי',
        businessRangePrice: 'עסקי'
    };

    const getMinimumPrice = pricesArray => pricesArray && min(pricesArray.map(x => x.price));

    const handleClickOpen = (priceRangeValue) => {
        const priceRangeKey = Object.keys(plansDictionary).find(x => plansDictionary[x] === priceRangeValue);
        setPriceRange(ip.price[priceRangeKey]);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const tiers = [
        {
            title: plansDictionary.privateRangePrice,
            price: getMinimumPrice(ip && ip.price && ip.price.privateRangePrice),
            description: [
                'אירועים אישיים, סרטונים לשימוש אישי,',
                'לחברים במשרד ועוד.'
            ]
        },
        {
            title: plansDictionary.socialRangePrice,
            price: getMinimumPrice(ip && ip.price && ip.price.socialRangePrice),
            description: [
                'מתאים לשימוש בסטוריז, פוסטים או סרטונים.'
            ]
        },
        {
            title: plansDictionary.businessRangePrice,
            price: getMinimumPrice(ip && ip.price && ip.price.businessRangePrice),
            description: [
                'דיג\'יים, מפיקים מתחילים, להקות -',
                'זה בשבילכם.'
            ]
        },
    ];

    return (
        <Grid container style={{ height: '40%' }}>
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
                                        <Typography variant="h6" color="textPrimary">
                                            החל מ-
                                            <Typography component="h2" variant="h3" color="textPrimary">{tier.price}₪</Typography>
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" color="textPrimary" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Button variant='outlined' color="primary" onClick={() => handleClickOpen(tier.title)}>
                                        קבלת רשיון
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    <LicensePlanDialog priceRange={priceRange} open={open} onClose={handleClose} />
                </Grid>
            </Container>
        </Grid>
    );
}