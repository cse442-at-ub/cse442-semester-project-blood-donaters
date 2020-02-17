import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div class="d-flex justify-content-center">
            <div class="login-form">
              <form>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="User Name"></input>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="Password"></input>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
