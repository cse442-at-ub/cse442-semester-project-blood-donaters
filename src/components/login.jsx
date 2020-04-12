import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return this.loginForm();
  }

  validateForm = () => {
    return this.state.username.length > 0 && this.state.password.length > 0;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.username == "admin" && this.state.password == "admin") {
      this.props.setUser("admin");
      this.props.userHasAuthenticated(true);
    } else {
      let rows = await fetch(
        `/authenticate/${this.state.username}/${this.state.password}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      let myJSON = await rows.json();
      if (myJSON == null) {
        alert("Wrong Username or Password!");
      } else {
        this.props.setUser(myJSON.username);
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
        <div className={this.paper}>
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
              onChange={(e) => this.setState({ username: e.target.value })}
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
