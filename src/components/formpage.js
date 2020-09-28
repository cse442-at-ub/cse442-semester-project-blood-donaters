import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
}));

const clearBoxes = () => {
    document.getElementById("signupform").reset();
}

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


Sign_Up() {
    const { classes } = this.props;
    return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{
            marginTop: "20px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5"> 
                Sign up
            </Typography>
            <br/>
            <form className={classes.form} id="signupform" method="POST" action="/CSE442-542/2020-spring/cse-442m/register">
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
                    Contact Information
                </Typography>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="phoneNumber"
                        label="Phone Number"
                        name="phoneNumber"
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
                <br/>
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
window.onload = clearBoxes;
export default withStyles(useStyles)(SignUp)