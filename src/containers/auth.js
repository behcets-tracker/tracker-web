import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../components/presentational/loading';

class AuthContainer extends Component {
  componentWillMount() {
    this.props.data.refetch().then(({data}) => {
      if (data.user === null) {
        this.props.history.push('/signup');
      } else if (data.user && data.user.id.length) {
        this.props.history.push('/feed');
      }
    });
  }

  render () {
    return <Loading />;
  }
}

const userQuery = gql`
  query {
    user {
      id
    }
  }
`;

export default graphql(userQuery)(withRouter(AuthContainer));
