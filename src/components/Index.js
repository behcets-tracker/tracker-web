import React from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import LoginAuth0 from './LoginAuth0';

function Index(props) {
  if (!props.data.user) {
    return <LoginAuth0 />;
  } else {
    console.log(props.data.user);
    return <h1>{props.data.user.name}</h1>;
  }
}

const userQuery = gql`
  query {
    user {
      id,
      name
    }
  }
`;

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' }})(withRouter(Index));
