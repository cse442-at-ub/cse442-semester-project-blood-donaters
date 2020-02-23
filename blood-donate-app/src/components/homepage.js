import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Layout from './layout';
import Grid from '@material-ui/core/Grid';
import blooddonationlogo from '../blooddonationlogo.png'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
   // margin: theme.spacing.unit * 2,
  },
  appbar:{
    position:'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }


};

function Homepage(props) {
  const { classes } = props;
  return (
  <div>
  <AppBar position="static" className={classes.appbar}>
  <Toolbar>
  <a href="http://localhost:3000/"><img src={blooddonationlogo} alt="Blood Donation App" height= '100' width='100' style={{marginRight:50}} /></a>
  <MuiThemeProvider>
  <Grid container justify="flex-end" direction="row" spacing={3}>
  
    <Button variant="contained" color="secondary">Blood Donors List</Button><br/>
    <Button variant="contained" color="secondary">Login</Button>
  </Grid>
  </MuiThemeProvider>
  </Toolbar>
  </AppBar>

  <Layout/>
  </div>
  );
 }

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homepage);