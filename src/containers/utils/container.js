import { Component } from 'react';

/**
 * Container component to manage authenticated routes.
 *
 * @class AuthContainer
 */
class AuthContainer extends Component {

  /**
   * Determines if the container component is currently loading data.
   *
   * @property hasUser
   * @return Boolean
   */
  get isLoading() {
    return this.props.data.loading;
  }

  /**
   * Determines if the container component has data.
   *
   * @property hasData
   * @return Boolean
   */
  get hasData() {
    return !!this.props.data;
  }

  /**
   * Determines if the container component has a logged in user or not.
   *
   * @property hasUser
   * @return Boolean
   */
  get hasUser() {
    return !!this.props.data.user;
  }

  /**
   * If the container is no longer fetching data and does not have a
   * user, we should redirect to the login page.
   *
   * @function _loginRedirect
   * @private
   */
  _loginRedirect() {
    if (!this.isLoading && !this.hasUser) {
      this.props.history.push('/login');
    }
  }

  componentWillMount() {
    this._loginRedirect();
  }

  componentWillReceiveProps() {
    this._loginRedirect();
  }

  // will always be overwritten
  render() {
    return null;
  }
}

export default AuthContainer;
