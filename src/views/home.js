import React, { Component } from 'react';
import LoginAuth0 from '../components/login-auth0';

class UserIndexView extends Component {
  render () {
    return (
      <div>
        <h1>Home view</h1>
        <LoginAuth0 />
      </div>
    );
  }
}

export default UserIndexView;
