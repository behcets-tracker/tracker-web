import React, { Component } from 'react';

class UserIndexView extends Component {
  render () {
    let user = this.props.data.user;

    return (
      <div>
        <h1>{user.name}</h1>
      </div>
    );
  }
}

export default UserIndexView;
