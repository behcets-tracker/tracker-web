import React, { Component } from 'react';
import { withRouter } from 'react-router';
import HomeView from '../views/home';

class HomeContainer extends Component {
  render() {
    return <HomeView />;
  }
}

export default withRouter(HomeContainer);
