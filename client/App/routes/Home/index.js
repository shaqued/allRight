import Navbar from '../../Shell/Navbar';
import Header from './Header';
import TopViews from './TopViews'
import { Box, Button, makeStyles } from '@material-ui/core'
import React from 'react';
import About from './About';
import HowItWorks from './HowItWorks';
import Footer from '../../Shell/Footer';
import history from '../../../history';

export default () => {
  const classes = useStyles();

  const redirectSignUp = () => history.push('/signUp');

  return (
    <Box className={classes.container}>
      <Navbar isHomepage />
      <Header />
      <TopViews />
      <About />
      <HowItWorks />
      <Box className={classes.subscribe}>
        <Button className={classes.button} onClick={redirectSignUp}>
          {'הצטרפו אלינו!'}
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    padding: '10px 30px',
    height: 'fit-content',
    color: 'white',
    backgroundColor: 'rgb(240,149,175)',
  },
  subscribe: {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0px'
  }
});
