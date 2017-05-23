import React, { Component } from 'react';
import Loading from '../components/presentational/loading/loading';

class UserIndexView extends Component {
  render () {
    let user = this.props.data.user;

    if (this.props.data.loading) {
      return <Loading />;
    }

    return (
      <div>
        <h1>{user.name}</h1>
      </div>
    );
  }
}

export default UserIndexView;
