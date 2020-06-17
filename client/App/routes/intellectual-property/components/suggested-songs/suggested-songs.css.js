import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    // gridList: {
    //     transform: 'translateZ(0)',
    // },
    // tile: {
    //     height: '100%',
    //     width: '100%'
    // },
    // titleBar: {
    //     background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    // },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        padding: '32px 0px',
        width: '1000px'
    },
    card: {
        boxShadow: 'none',
        borderRadius: 0,
        backgroundColor: 'transparent',
        width: '175px',
        paddingLeft: '7px',
        display: 'inline-block'
    },
    cardContent: {
        padding: 0
    },
    media: {
        height: '150px'
    },
    content: {
        overflow: 'auto',
        whiteSpace: 'nowrap',
        width: '1000px',
        paddingBottom: '50px'
    }
}));