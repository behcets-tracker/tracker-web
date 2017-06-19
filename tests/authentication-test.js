import React from 'react';
import { expect } from 'chai';
import {
  $,
  it,
  startApp
} from './utils/test-helpers';

describe('Authentication', function() {
  startApp();

  describe('not logged in', function() {
    beforeEach(function() {
      //ensure you're logged out
      this.app.logout();
    });

    it('lands on the login route', function() {
      expect(this.app.currentToken).to.equal(null);
      expect(this.app.currentPath).to.equal('/login');
    });

    describe('navigating to a protected route', function() {
      beforeEach(function() {
        this.app.visit('/feed');
      });

      it('redirects to login', function() {
        expect(this.app.currentPath).to.equal('/login');
      });
    });
  });

  describe('logged in', function() {
    beforeEach(function() {
      this.app.login();
    });

    afterEach(function() {
      this.app.logout();
    });

    describe('navigating to a protected route', function() {
      beforeEach(function() {
        this.app.visit('/feed');
      });

      it('actually navigates', function() {
        expect(this.app.currentPath).to.equal('/feed');
      });

      it('renders the user name', function() {
        expect($('h1').text()).to.equal('Name Namerson');
      });
    });
  });
});
