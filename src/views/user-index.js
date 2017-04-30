import React, { Component } from 'react';
// import Loading from './Loading';

const Loading = () => {
  return <span>Loading...</span>;
};

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
