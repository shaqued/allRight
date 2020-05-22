import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wave: {
        width: '80%',
        maxHeight: '120px',
    },
    image: {
        height: '250px', // todo: switch to rem/em
        width: '250px',
        backgroundSize: 'cover',
        margin: 'auto',
        backgroundPosition: 'center center'
    },
    imageContainer: {
        margin: 'auto'
    }
}));