import jQuery from 'jquery';
import sinonChai from 'sinon-chai';
import jqueryChai from 'chai-jquery';
import App from '../../src/app';
import Pretender from 'pretender';
import pretenderRoutes from './pretender-routes';
import { unmountComponentAtNode } from 'react-dom';
import TestApplication from './test-application';
import chai from 'chai';

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
    // start new pretender server to intercept XMLHttpRequests
    this.server = new Pretender(pretenderRoutes);
    this.testContainer = document.createElement('div');
    this.testContainer.id = '#testing';
    document.body.appendChild(this.testContainer);

    this.app = new TestApplication(App, this.testContainer);
  });

  afterEach(function() {
    unmountComponentAtNode(this.testContainer);
    document.body.removeChild(this.testContainer);
    this.testContainer = null;
    this.server.shutdown();
  });
}
