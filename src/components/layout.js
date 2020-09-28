import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import blooddonationimage from '../assets/blooddonationimage.jpg'

function Layout() {

  return (
      <Container>
        <img
          src={blooddonationimage}
          alt="wonder"
        />
   
        <Grid>
        <Typography variant="h2" color ='primary'>
             Welcome to the Blood Donation App
       </Typography>
      <Typography variant="h4" color ='secondary'>
           Blood donors click on the Blood Donors link to register your name in the app and Blood seekers click the Blood Seekers Link to see the available Blood Donors
      </Typography>
       </Grid>
      </Container>
  )
}
export default Layout;