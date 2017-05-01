import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SignUpView from '../views/sign-up';

class SignUpContainer extends Component {
  render () {
    return <SignUpView createUser={this.createUser} />;
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
        alert('There was an error.');
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

export default graphql(createUser, {name: 'createUser'})(withRouter(SignUpContainer));
