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
    // this.timeout(11000);
    assertUntilTimeout(() => {
      expect($nav).to.have.lengthOf(1);
      expect(window.location.pathname).to.equal('/login');
      done();
    });
  });
});
