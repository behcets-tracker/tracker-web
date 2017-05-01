import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import Loading from '../components/presentational/loading';
import FeedView from '../views/feed';

class FeedContainer extends Component {
  render() {
    if (this.props.data.loading) {
      return <Loading />;
    }

    return <FeedView data={this.props.data} />;
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

export default graphql(userQuery)(withRouter(FeedContainer));
