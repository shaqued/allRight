import {makeStyles} from '@material-ui/core/styles';

const backgroundColor = '#92BAEB';

export default makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    imageSection: {
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
}));