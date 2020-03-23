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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
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
}));


 class SignUp extends Component{
 constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password:"",
      blood_type:"",
      medical_history:""
    };
  }
  render() {
    return this.Sign_Up();
  }

/*onSubmit(){
        
        
        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            blood_type: this.state.blood_type,
            medical_history: this.state.medical_history,
        };

        axios.post('http://localhost:3000/CSE442-542/2020-spring/cse-442m/sign-up', newUser)
            .then(res => console.log(res.data));

        this.setState({
           first_name: "",
           last_name: "",
           email: "",
           password:"",
           blood_type:"",
           medical_history:""
        })
    }
*/

Sign_Up() {

const { classes } = this.props;
return (
<Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5"> 
            Sign up
        </Typography>
        <form className={classes.form}  method="POST" action="http://localhost:5000/CSE442-542/2020-spring/cse-442m/register">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />
                </Grid>
            </Grid>
            <br />
            <Typography align="center" component="h1" variant="h5">
                Medical Information
            </Typography>
            <br />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="bloodGroup"
                    label="Blood Type"
                    name="bloodGroup"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="medicalHistory"
                    label="Medical History"
                    name="medicalHistory"
                    />
                </Grid>
            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            className={classes.submit}
            >
            Sign Up
            </Button>
            
            <Grid container justify="flex-end">
            <Grid item>
                <Link href="/login" variant="body2">
                Already have an account? Sign in
                </Link>
            </Grid>
            </Grid>
        </form>
    </div>
</Container>
);
}
}
export default withStyles(useStyles)(SignUp)