import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import 'tachyons';
import './index.css';

// Paste your endpoint for the Simple API here.
// Info: https://github.com/graphcool-examples/react-apollo-instagram-example#2-create-graphql-api-with-graphcool
const networkInterface = createNetworkInterface({ uri: 'behcets-tracker' });

const client = new ApolloClient({networkInterface});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path='/' component={Index} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
