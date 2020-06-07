import logo from '../../../assets/icons/AllrightLogo.png';
import React from 'react';
import { Box, Button, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default () => {
  const classes = useStyles();

  return (
    <Box className={classes.centered}>
      <Box className={classes.header}>
        <Box display={'flex'} flexDirection={'row-reverse'}>
          <Button
            component={Link}
            to='/signIn'
            className={clsx(classes.pinkButton, classes.button)}          >
            {'הצטרפו אלינו'}
          </Button>
          <Button className={classes.button}>
            {'כניסת משתמשים'}
          </Button>
          <Button className={clsx(classes.button, classes.bold)}>
            {'הצטרפות כיוצרים'}
          </Button>
        </Box>
        <Box>
          <Button component={Link} to='/'>
            <img src={logo} className={classes.logo} />
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
    backgroundColor: 'rgb(81,122,106)',
  },
  button: {
    margin: '10px',
    padding: '10px',
    height: 'fit-content',
    color: 'white'
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
