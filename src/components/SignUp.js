import React from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SignUpView from '../components/presentational/SignUpView';

class SignUpContainer extends React.Component {
  render () {
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
