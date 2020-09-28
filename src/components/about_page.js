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
import { spacing } from '@material-ui/system';

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

<Container component="main" maxWidth="100%">
    <CssBaseline />
    <div className={classes.paper}>
       
        <Typography component="h1" variant="h3" align ="center" color = "secondary"> 
            About Blood Donation App
        </Typography>
        
  
  
    <Grid item xs={12}>
     <Typography component="h4" variant="h5"> 
We are Blood Donaters from New York. Our main goal is to provide the highest quality blood 
to hospitals and patients primarily in the greater New York metropolitan area. The app 
is restricted to the authorized users and users with valid credentials can use this app. 
The blood donors can list their blood group and necessary information after logging in. 
On the other hand, blood seekers can see the available blood donors list and filter the 
blood donors list based on their need.
    </Typography>
    </Grid>

        <Typography component="h1" variant="h3" align="center" color = "secondary" m={2}> 
            Frequently Asked Questions
        </Typography>
        
    
 
    <Typography component="h4" variant="h4" m={2}> 
       Does it cause any problem to my health if I give blood to others?
     </Typography>

    <Typography component="h6" variant="body1" m={2}> 
       There is no harm giving blood to others. Rather, you are contributing to save
       human life.
     </Typography>
     <Typography component="h4" variant="h4" m={2}> 
       Is the medical history information is mandatory?
     </Typography>
    <Typography component="h6" variant="body1" m={2}> 
       Yes, it is really important. Without entering previous medical history, you can not
       donate blood.
     </Typography>
    <Typography component="h4" variant="h4" m={2}> 
       How often can I give blood?
     </Typography>
     <Typography component="h6" variant="body1" m={2}> 
       Generally, you can give blood every 2 months. 
     </Typography>
     <Typography component="h4" variant="h4" m={2}> 
       Is it safe for me to receive bloods from here?
     </Typography>
     <Typography component="h6" variant="body1" m={2}> 
      Yes, of course. We verify each of donors medical history prior to adding them to 
       the donors list. We make sure that blood donation is safe both for our blood donors and 
       blood seekers. 
     </Typography>
     <Typography component="h4" variant="h4" m={2}> 
       Is there any age restrictions to donate blood?
     </Typography>
     <Typography component="h6" variant="body1" m={2}> 
        Yes, You have to be at least 17 years old in order to give blood.
     </Typography>


  
    
    
  
    
 
   </div>

</Container>

);
}
}
export default withStyles(useStyles)(About_Page);