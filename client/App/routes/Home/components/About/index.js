import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import videoPlayer from '../../../../../assets/photos/VideoPlayer.png'

export default () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <Box>
                    <Typography variant={'h2'} className={classes.title} gutterBottom>
                        {`לשמור על התוכן שלכם באוויר, בקלות!`}
                    </Typography>
                    <Typography variant={'body2'}>
                        {`AllRight מגדירה מחדש את כללי המשחק בעולם זכויות היוצרים.`}
                    </Typography>
                    <Typography variant={'body2'} gutterBottom>
                        {`כדי להשתמש בשיר ברקע בסטורי, או בוידאו ארט בקליפ שלנו, יש צורך לשלם ליוצרים על זכויות היוצרים.
אנחנו כאן כדי לגשר ביניכם בצורה הכי פשוטה שיש ולאפשר קנייה מקוונת אינטואיטיבית ופשוטה.
אצלנו תוכלו לרכוש זכויות שימוש לתוכן מקורי, זמין, ומגוון לכל שימוש שהוא בצורה הקלה ביותר.
לא עוד סרטונים שיוסרו מיוטיוב ואינסטגרם בגלל הפרת זכויות יוצרים, ופעם הראשונה בארץ -
לא עוד טפסים מסובכים, ועדות שימוש, וזמן המתנה.`}
                    </Typography>
                    <Typography variant={`body2`}>
                        {`כל התוכן שעולה לאתר זמין לקנייה מקוונת לכל המבקש, מבחיר ידוע מראש, והכי חשוב, הוגן.`}
                    </Typography>
                    <Typography variant={'body2'} gutterBottom>
                        <strong>
                            {`יוצרים? `}
                        </strong>
                        {`כאן תוכלו להציע את היצירות והתוכן המקורי שלכם לשימוש לעולם הרחב תוך כדי קבלת
תגמול והכרה על העבודה שלכם, וגם תוכלו לראות מי משתמש בתוכן שלכם, מתי ואיך.`}
                    </Typography>
                    <Typography variant={'body2'}>
                        {'ברוכים הבאים לעולם מלא בהשראה!'}
                    </Typography>
                </Box>
                <img src={videoPlayer} className={classes.image} />
            </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: '100px 0px',
        backgroundColor: 'rgb(238,238,238)'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '1000px',
        alignItems: 'center'
    },
    bold: {
        fontWeight: 700
    },
    image: {
        maxHeight: '260px',
        paddingRight: '60px'
    },
    title: {
        paddingBottom: '20px'
    }
})
