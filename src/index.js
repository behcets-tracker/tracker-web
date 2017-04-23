import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import 'tachyons';
import './index.css';

// Paste your endpoint for the Simple API here.
// Info: https://github.com/graphcool-examples/react-apollo-instagram-example#2-create-graphql-api-with-graphcool
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/behcets-tracker' });

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    // get the authentication token from local storage if it exists
    if (window.localStorage.getItem('auth0IdToken')) {
      req.options.headers.authorization = `Bearer ${window.localStorage.getItem('auth0IdToken')}`;
    }
    next();
  }
}]);

const client = new ApolloClient({networkInterface});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path='/' component={Index} />
        <Route exact path='/signup' component={SignUp} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
