import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import blooddonationimage from '../blooddonationimage.jpg'
const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1100,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  grid: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 10,
    backgroundColor: theme.palette.common.black,
    zIndex: -1,

  }
});

function Layout(props) {
  const { backgroundClassName, children, classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={blooddonationimage}
          alt="wonder"
          width="1500"
          height="1000"
        />
   
        <Grid className={classes.grid} width="100%">
        <Typography variant="h2" color ='primary'>
             Welcome to the Blood Donation App
       </Typography>
      <Typography variant="h4" color ='secondary'>
           Blood donors click on the Blood Donors link to register your name in the app and Blood seekers click the Blood Seekers Link to see the available Blood Donors
      </Typography>
       </Grid>
      </Container>
       


       
 
        {children}
       <div className={classes.backdrop} />
       <div className={clsx(classes.background, backgroundClassName)} />
       
        
 
    </section>
  )
}

Layout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);