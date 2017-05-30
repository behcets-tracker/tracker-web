import React from 'react';
import { render } from 'react-dom';

class TestApplication {
  constructor(App, testContainer) {
    this.app = render(React.createElement(App), testContainer);
    this.router = this.app.refs.router;
  }

  get currentPath() {
    return this.router.history.location.pathname;
  }

  get currentToken() {
    return window.localStorage.getItem('auth0IdToken');
  }

  // Since we're using auth0 for auth it makes testing this app very
  // easy.
  login() {
    window.localStorage.setItem('auth0IdToken', 'fakeToken');
  }

  logout() {
    window.localStorage.removeItem('auth0IdToken');
  }

  // very simple / dumb visit for now
  // in the future I'd like to wrap in a promise
  visit(path) {
    this.router.history.push(path);
  }

}

export default TestApplication;
