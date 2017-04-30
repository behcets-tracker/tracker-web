import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SignUpView from '../views/sign-up';
import Loading from '../components/presentational/loading';

class SignUpContainer extends Component {
  render () {
    if (this.props.data.loading) {
      return <Loading />;
    }

    // redirect if user is logged in or did not finish Auth0 Lock dialog
    if (this.props.data.user || window.localStorage.getItem('auth0IdToken') === null) {
      console.warn('not a new user or already logged in');
      this.props.router.replace('/feed');
    }

    return <SignUpView data={this.props.data} createUser={this.createUser} />;
  }

  createUser = (emailAddress, name, displayName) => {
    const variables = {
      idToken: window.localStorage.getItem('auth0IdToken'),
      emailAddress,
      name,
      displayName
    };

    this.props.createUser({ variables })
      .then((response) => {
        this.props.history.push('/');
      }).catch((e) => {
        console.error(e);
        // lol handle errors
        this.props.history.push('/');
      });
  }
}

const createUser = gql`
  mutation ($idToken: String!, $name: String!, $emailAddress: String!, $displayName: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}, name: $name, emailAddress: $emailAddress, displayName: $displayName) {
      id
    }
  }
`;

const userQuery = gql`
  query {
    user {
      id
    }
  }
`;

export default graphql(createUser, {name: 'createUser'})(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' }})(withRouter(SignUpContainer))
);
