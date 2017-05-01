import React, { Component } from 'react';
import { withRouter } from 'react-router';
import LoginAuth0 from '../components/login-auth0';

class LoginContainer extends Component {
  render () {
    return <LoginAuth0 />;
  }
}

export default withRouter(LoginContainer);
