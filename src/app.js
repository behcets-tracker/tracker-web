import React, { Component } from 'react';
import AppContainer from './containers/app';
import SignUpContainer from './containers/sign-up';
import FeedContainer from './containers/feed';
import LogoutContainer from './containers/logout';
import AuthContainer from './containers/auth';
import LoginContainer from './containers/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/behcets-tracker' });

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    // get the authentication token from local storage if it exists
    let token = window.localStorage.getItem('auth0IdToken');
    if (token) {
      req.options.headers.authorization = `Bearer ${token}`;
    }
    next();
  }
}]);

const client = new ApolloClient({networkInterface});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route path='/' component={AppContainer} />
            <Route exact path='/feed' component={FeedContainer} />
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/signup' component={SignUpContainer} />
            <Route exact path='/logout' component={LogoutContainer} />
            <Route exact path='/auth' component={AuthContainer} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
};

export default App;
