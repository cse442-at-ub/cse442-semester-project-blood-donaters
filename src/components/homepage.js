import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Layout from './layout';
import Grid from '@material-ui/core/Grid';
import blooddonationlogo from '../assets/blooddonationlogo.png';
import { Link } from 'react-router-dom';
import NavBar from "./navbar";

function Homepage() {
  return (
  <div>
  <Layout/>
  </div>
  );
 }

export default Homepage;