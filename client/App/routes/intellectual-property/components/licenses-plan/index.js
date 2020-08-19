import React, {useState} from 'react';
import useStyles from './licenses-plan.css';
import LicensePlanDialog from './license-plan-dialog';
import { Grid, Container, Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import { min } from 'lodash';
import Alert from 'components/Alert';

export default ({ ip }) => {
    const classes = useStyles(),
        [isDialogOpen, setIsDialogOpen] = useState(false),
        [showSnackbar, setShowSnackbar] = useState(false),
        snackbarMessages = {
            success: "נוסף לעגלה בהצלחה!",
            error: "אוי לא, משהו השתבש. נסו שנית מאוחר יותר"
        },
        [addToCartStatus, setAddToCartStatus] = useState('success'),
        [priceRange, setPriceRange] = useState([]);

    let plansDictionary = {
        privateRangePrice: 'פרטי',
        socialRangePrice: 'חברתי',
        businessRangePrice: 'עסקי'
    };

    const getMinimumPrice = pricesArray => pricesArray && min(pricesArray.map(x => x.price));

    const handleClickOpen = (priceRangeValue) => {
        const priceRangeKey = Object.keys(plansDictionary).find(x => plansDictionary[x] === priceRangeValue);
        setPriceRange(ip.price[priceRangeKey]);
        setIsDialogOpen(true);
    };

    const handleDialogClose = (success) => {
        setIsDialogOpen(false);
        success ? setAddToCartStatus('success') : setAddToCartStatus('error');
        setShowSnackbar(true);
    };

    const handleSnackClose = (event, reason) => {
        setShowSnackbar(false);
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
        <Grid item container>
            <CssBaseline />
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier, index) => (
                        <Grid item key={index} xs={12} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography variant="body2" color="textPrimary">
                                            החל מ-
                                            <Typography component="h2" variant="h3" color="textPrimary">{tier.price}₪</Typography>
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line, index) => (
                                            <Typography component="li" color="textPrimary" variant="body2" align="center" key={index}>
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
                    <LicensePlanDialog ip={ip} selectedPriceSection={priceRange} open={isDialogOpen} onClose={handleDialogClose} />
                </Grid>
            </Container>
            <Alert open={showSnackbar} onClose={handleSnackClose} severity={addToCartStatus}>
                {snackbarMessages[addToCartStatus]}
            </Alert>
        </Grid>
    );
}