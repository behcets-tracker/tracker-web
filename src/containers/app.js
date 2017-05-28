import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Navigation from '../components/navigation';

class AppContainer extends Component {
  get hasToken() {
    let authToken = window.localStorage.getItem('auth0IdToken');

    // No token in localStorage means we can't auth any requests
    // if (!authToken) {
    //   return false;
    // }

    return true;
  }

  _missingTokenRedirect() {
    // In the future this might redirect to a home page with a link to login
    if (!this.hasToken && window.location.pathname !== '/login') {
      this.props.history.push('/login');
    }
  }

  componentWillMount() {
    this._missingTokenRedirect();
  }

  componentWillReceiveProps() {
    this._missingTokenRedirect();
  }

  render() {
    return <Navigation user={this.props.data.user} />;
  }
}

const userQuery = gql`
  query {
    user {
      id,
      displayName
    }
  }
`;

export default graphql(userQuery)(withRouter(AppContainer));
