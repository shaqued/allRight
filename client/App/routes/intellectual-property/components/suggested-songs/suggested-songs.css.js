import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    gridList: {
        transform: 'translateZ(0)',
    },
    tile: {
        height: '100%',
        width: '100%'
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));