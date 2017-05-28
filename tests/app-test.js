import React from 'react';
import { expect } from 'chai';
import { $, assertUntilTimeout, startApp } from './test-helpers';

describe('Render the app', function() {
  let $nav;

  startApp();

  beforeEach(function() {
    $nav = $(".nav");
  });

  it('works', function(done) {
    assertUntilTimeout(() => {
      expect($nav).to.have.lengthOf(1);
      done();
    });
  });

  describe('navigating to a new route', function() {
    beforeEach(function() {
      this.router.history.push('/feed');
    });

    it('actually navigates', function() {
      expect(this.router.history.location.pathname).to.equal('/feed');
    });

    it('renders the user name', function(done) {
      assertUntilTimeout(() => {
        expect($('h1').text()).to.equal('Robert DeLuca');
        done();
      });
    });
  });
});
