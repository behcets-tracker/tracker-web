import { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import { withRouter } from 'react-router';

class LoginAuth0 extends Component {

  constructor (props) {
    super(props);

    this._lock = new Auth0Lock(process.env.REACT_APP_AUTH_0_CLIENT_ID, process.env.REACT_APP_AUTH_0_DOMAIN);
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

  render() {
    return null;
  }
}

export default withRouter(LoginAuth0);
