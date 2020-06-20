import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    wave: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    sample: {
        maxHeight: '40%',
        maxWidth: '100%',
        alignSelf: 'center'
    },
    image: {
        height: '70%',
        width: '70%',
        backgroundSize: 'cover',
        margin: 'auto',
        backgroundPosition: 'center center'
    },
    imageContainer: {
        margin: 'auto'
    }
}));