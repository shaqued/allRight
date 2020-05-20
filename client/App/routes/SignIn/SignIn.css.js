import {makeStyles} from '@material-ui/core/styles';

const backgroundColor = '#92BAEB';

export default makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    imageSection: {
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        // backgroundRepeat: 'no-repeat',
        backgroundColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    image: {
        height: '400px', // todo: switch to rem/em
        width: '400px',
        margin: 'auto'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '70%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));