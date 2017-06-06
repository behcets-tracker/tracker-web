import React from 'react';
import AuthContainer from './utils/container';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import Loading from '../components/presentational/loading/loading';
import SymptomView from '../views/symptom';

/**
 * Manages the user symptom route.
 *
 * @class SymptomContainer
 * @extends AuthContainer
 */
class SymptomContainer extends AuthContainer {
  render() {
    if (this.isLoading) {
      return <Loading />;
    }

    return <SymptomView data={this.props.data} />;
  }
}

const userSymptomQuery = gql`
  query {
    user {
      id,
      symptoms {
        id,
        name,
        description,
        questions
      }
    }
  }
`;

export default graphql(userSymptomQuery)(withRouter(SymptomContainer));
