import Navbar from '../../Shell/Navbar';
import Header from './components/Header';
import TopViews from './components/TopViews'
import { Box, Button, makeStyles } from '@material-ui/core'
import React from 'react';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Footer from '../../Shell/Footer';

export default () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Navbar />
      <Header />
      <TopViews />
      <About />
      <HowItWorks />
      <Box className={classes.subscribe}>
        <Button className={classes.button}>
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
