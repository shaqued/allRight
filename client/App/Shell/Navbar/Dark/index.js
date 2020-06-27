<<<<<<< HEAD:client/App/Shell/Navbar/Dark/index.js
import darkLogo from '../../../../assets/icons/AllrightLogo.png';
import React from 'react';
import { Box, Button } from '@material-ui/core';
=======
import whiteLogo from '../../../assets/icons/AllrightWhiteLogo.png';
import blackLogo from '../../../assets/icons/AllrightBlackLogo.png';
import React from 'react';
import { Box, Button, CssBaseline } from '@material-ui/core';
>>>>>>> 5780b6a... added account page, route, card:client/App/Shell/Navbar/index.js
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

export default ({ isHomepage }) => {
    const classes = useStyles();

    return (
        <Box className={`${classes.centered} ${isHomepage? classes.homepageBackground : ''}`}>
            <CssBaseline />
            <Box className={classes.header}>
                <Box display={'flex'} flexDirection={'row-reverse'}>
                    <Button
                        component={Link}
                        to='/signUp'
                        color='primary'
                        variant='contained'
                        className={classes.button}
                    >
                        {'הצטרפו אלינו'}
                    </Button>
                    <Button component={Link} to='/signIn' 
                        className={`${isHomepage ? classes.lightText: classes.darkText} 
                            ${classes.button}`}
                        >
                        {'כניסת משתמשים'}
                    </Button>
                    <Button component={Link} to="/signUp" 
                        className={`${isHomepage ? classes.lightText: classes.darkText} 
                        ${classes.button} ${classes.bold}`}
                        >
                        {'הצטרפות כיוצרים'}
                    </Button>
                </Box>
                <Box>
                    <Button component={Link} to='/'>
                        <img src={isHomepage ? whiteLogo : blackLogo} className={classes.logo} />
                    </Button>
                </Box>
            </Box>
        </Box>
<<<<<<< HEAD:client/App/Shell/Navbar/Dark/index.js
        <Box>
          <Button component={Link} to='/'>
            <img src={darkLogo} className={classes.logo} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingLeft: '20px',
    height: '80px',
    alignItems: 'center',
    width: '900px'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgb(81,122,106)'
  },
  button: {
    margin: '10px',
    padding: '10px',
    height: 'fit-content',
    color: '#FFFFFF'
  },
  pinkButton: {
    backgroundColor: 'rgb(240,149,175)'
  },
  bold: {
    fontWeight: 800
  },
  logo: {
    maxHeight: '60px'
  }
});
=======
    );
};

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        paddingLeft: '20px',
        height: '80px',
        alignItems: 'center',
        width: '100%'
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
    },
    homepageBackground: {
        backgroundColor: theme.palette.background.homepage,
    },
    button: {
        margin: '10px',
        padding: '10px',
        height: 'fit-content',
    },
    lightText: {
        color: theme.palette.text.secondary
    },
    darkText: {
        color: theme.palette.text.primary
    },
    bold: {
        fontWeight: "bold"
    },
    logo: {
        maxHeight: '60px',
        marginRight: theme.spacing(2)
    }
}));
>>>>>>> 5780b6a... added account page, route, card:client/App/Shell/Navbar/index.js
