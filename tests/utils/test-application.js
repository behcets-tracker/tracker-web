import React from 'react';
import { render } from 'react-dom';

/**
 * A wrapper around a running Application for tests.
 *
 * This wrapper is to contain the current state of the application and
 * to provide helper functions specifically for testing.
 *
 *
 * @param { React Component } App
 * @param { DOM Element } testContainer
 */
class TestApplication {
  constructor(App, testContainer) {
    this.renderApp(App, testContainer);
    this.router = this.app.refs.router;
  }

  /**
   * The current path from the router state
   *
   * @returns { string } pathname
   */
  get currentPath() {
    return this.router.history.location.pathname;
  }

  /**
   * The auth0 token for the test application
   *
   * @returns { string } token
   */
  get currentToken() {
    return window.localStorage.getItem('auth0IdToken');
  }

  /**
   * Log the user in
   *
   * @function
   */
  login() {
  // Since we're using auth0 for auth it makes testing this app very
  // easy.
    window.localStorage.setItem('auth0IdToken', 'fakeToken');
  }

  /**
   * Log the user out
   *
   * @function
   */
  logout() {
    window.localStorage.removeItem('auth0IdToken');
  }

  /**
   * Vist a specifc route in the application
   *
   * @param { string } path
   */
  visit(path) {
    // very simple / dumb visit for now
    // in the future I'd like to wrap in a promise
    this.router.history.push(path);
  }

  /**
   * Render the application to the DOM.
   *
   * This is invoked before each test with empty props to ensure a
   * clean application.
   *
   * @param { React Component } App
   * @param { DOM Element } testContainer
   * @param { Object } props - props to rerender the application with
   */
  renderApp(App, testContainer, props = {}) {
    this.app = render(React.createElement(App, props), testContainer);
  }

}

export default TestApplication;
