import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
const mysql = require('mysql');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  sqlQuery(query) {
    let queriedRows;
    
    const connection = mysql.createConnection({
      host: 'tethys',
      user: 'ptmorask',
      password: '50237054',
      database: 'cse442_542_2020_spring_teamm_db'
    });
    connection.connect((err) => {
      if (err) throw err;
      console.log('Connected!');
    });
    connection.query(query, (err,rows) => {
      if(err) throw err;
    
      queriedRows = rows;
    });
    connection.end();
    return queriedRows;
  }

  render() {
    return this.loginForm();
  }

  validateForm = () => {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let rows = this.sqlQuery(`SELECT * FROM test WHERE username='${this.state.password}' && password='${this.state.username}';`);
    console.log(rows);
  }

  loginForm() {
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
            onChange={e => this.setState({username: e.target.value})}
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
            onChange={e => this.setState({password: e.target.value})}
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
    )
  }
}
export default Login;
