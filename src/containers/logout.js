import { Component } from 'react';
import { withRouter } from 'react-router';

class LogoutContainer extends Component {
  constructor(props) {
    super(props);

    window.localStorage.removeItem('auth0IdToken');
    this.props.history.replace('/');
    window.location.reload();
  }
}

export default withRouter(LogoutContainer);
