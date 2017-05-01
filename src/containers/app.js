import React, { Component } from 'react';
import { withRouter } from 'react-router';
import HomeView from '../views/home';

class HomeContainer extends Component {
  get hasToken() {
    let authToken = window.localStorage.getItem('auth0IdToken');

    // No token in localStorage means we can't auth any requests
    if (!authToken) {
      return false;
    }

    return true;
  }

  componentWillReceiveProps() {
    // In the future this might redirect to a home page with a link to login
    if (!this.hasToken && window.location.pathname !== '/login') {
      this.props.history.push('/login');
    }
  }

  render() {
    return <HomeView />;
  }
}

export default withRouter(HomeContainer);
