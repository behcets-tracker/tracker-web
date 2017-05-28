import jQuery from 'jquery';
import sinonChai from 'sinon-chai';
import jqueryChai from 'chai-jquery';
import App from '../src/app';
import Pretender from 'pretender';
import pretenderRoutes from './pretender-routes';
import { render, unmountComponentAtNode } from 'react-dom';
import chai from 'chai';
import React from 'react';

chai.use(sinonChai);
chai.use((chai, utils) => jqueryChai(chai, utils, jQuery));

export { default as $ } from 'jquery';

// helper to loop over assertions until the test timeout
export function assertUntilTimeout(fn) {
  (function loop() {
    try { fn(); } catch(e) {
      requestAnimationFrame(loop);
    }
  })();
}

export function startApp() {
  beforeEach(function() {
    this.server = new Pretender(pretenderRoutes);
    this.testContainer = document.createElement('div');
    this.testContainer.id = '#testing';
    document.body.appendChild(this.testContainer);

    this.app = render(React.createElement(App), this.testContainer);
    this.router = this.app.refs.router;
  });

  afterEach(function() {
    unmountComponentAtNode(this.testContainer);
    document.body.removeChild(this.testContainer);
    this.testContainer = null;
    this.server.shutdown();
  });
}
