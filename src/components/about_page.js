import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));
class About_Page extends Component{
 constructor(props) {
    super(props);
    
  }
  render() {
    return this.About_Page();
  }
About_Page() {

const { classes } = this.props;
return (
<Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
        <Typography component="h1" variant="h5"> 
            About Blood Donation App
        </Typography>
        
    </div>
    <div className={classes.root}>{"We are Blood Donaters from New York. Our main goal is to provide the highest quality blood to hospitals and patients primarily in the greater New York metropolitan area"}</div>
</Container>

);
}
}
export default withStyles(useStyles)(About_Page);