import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import { withRouter } from 'react-router';

/**
 * Mock the auth0 lock in tests so we're not actually invoking auth0.
 *
 */
const TestMockLock = {
  show() {},
  on() {}
};

/**
 * A component whose job is to authenticate with Auth0 and store the
 * idToken in localStore. Then redirect to the auth route.
 *
 * @class LoginAuth0
 * @extends React.Component
 */
class LoginAuth0 extends Component {
  constructor (props) {
    super(props);

    this._lock = new Auth0Lock(
      process.env.REACT_APP_AUTH_0_CLIENT_ID,
      process.env.REACT_APP_AUTH_0_DOMAIN
    );

    if (process.env.NODE_ENV === 'test') {
      this._lock = TestMockLock;
    }
  }

  componentDidMount() {
    this._lock.on('authenticated', (authResult) => {
      window.localStorage.setItem('auth0IdToken', authResult.idToken);
      this.props.history.replace(`/auth`);
    });

    if (!this.props.history.location.hash.includes('access_token')) {
      this._lock.show();
    }
  }

  _handleClick = () => {
    this._lock.show();
  }

  render() {
    return (
      <div className="section">
        <div className="container has-text-centered">
          <button onClick={this._handleClick} className="button is-primary">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginAuth0);
