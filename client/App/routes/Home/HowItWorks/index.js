import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import startIcon from '../../../../assets/icons/icon-start@2x.png'
import surveyIcon from '../../../../assets/icons/icon-survey@2x.png'
import creditCardIcon from '../../../../assets/icons/icon-mastercard-credit-card@2x.png'

export default () => {
    const classes = useStyles();

    const Step = ({ src, text }) => <Box className={classes.step}>
        <img src={src} className={classes.icon} />
        <Typography variant={'body2'}>
            {text}
        </Typography>
    </Box>

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Typography variant={'h2'} className={classes.title} gutterBottom>
                    {`רישיון שימוש - איך זה עובד?`}
                </Typography>
                <Typography variant={'body2'}>
                    {`בואו לרכוש אצלנו רישיון לשימוש בזכויות יוצרים, ליצירות שתרצו ובמחיר שמותאם במיוחד לשימוש שלכם.`}
                </Typography>
                <Step src={startIcon} text={`אחרי שמצאתם את השיר או היצירה שרוצים להשתמש בהם, עונים על מספר שאלות מהירות כדי להבין מה אופן השימוש - גודל קהל היעד ופלטפורמת השימוש.`} />
                <Step src={surveyIcon} text={`רוכשים רישיון לשימוש ביצירה באופן מקוון, בקלות ובמהירות, ובתמחור שייקבע בהתאמה אישית בדיוק בשבילכם.`} />
                <Step src={creditCardIcon} text={`מקבלים תעודת אישור שימוש ביצירה ומשתמשים בה ללא דאגות ברשתות החברתיות, בעסק, באירוע משפחתי או בכל מקום אחר!`} />
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        width: '1000px',
    },
    icon: {
        maxHeight: '35px',
        paddingLeft: '20px'
    },
    title: {
        paddingBottom: '20px',
        paddingTop: '100px'
    },
    step: {
        display: 'flex',
        paddingTop: '15px',
        paddingRight: '25px'
    }
})
