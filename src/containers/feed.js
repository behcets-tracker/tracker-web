import React from 'react';
import AuthContainer from './utils/container';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import Loading from '../components/presentational/loading/loading';
import FeedView from '../views/feed';

/**
 * Manages the user feed route.
 *
 * @class FeedContainer
 * @extends AuthContainer
 */
class FeedContainer extends AuthContainer {
  render() {
    if (this.isLoading) {
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
