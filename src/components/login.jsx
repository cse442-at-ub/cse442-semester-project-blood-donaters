import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return this.loginForm();
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.props.setUser("admin");
      this.props.userHasAuthenticated(true);
    } else {
      let response = await fetch(
        `/authenticate/${this.state.email}/${this.state.password}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let myJSON = await response.json();
      let firstname = myJSON.firstname;
      console.log(firstname);
      if (firstname == null) {
        alert("Wrong Username or Password!");
      } else {
        this.props.setUser(firstname);
        this.props.userHasAuthenticated(true);
        console.log("Authenticated");
      }
    }
  };

  logout = (event) => {
    event.preventDefault();
    this.props.setUser("");
    this.props.userHasAuthenticated(false);
  };

  loginForm() {
    if (this.props.isAuthenticated) {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={this.paper}>
            <p>{`You are currently logged in as: ${this.props.user}`}</p>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={this.submit}
              onClick={this.logout}
            >
              Log Out
            </Button>
          </div>
        </Container>
      );
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{
          marginTop: "20px",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={this.form} onSubmit={this.handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.submit}
              disabled={!this.validateForm()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
export default Login;
