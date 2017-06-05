import jQuery from 'jquery';
import sinonChai from 'sinon-chai';
import jqueryChai from 'chai-jquery';
import App from '../../src/app';
import Pretender from 'pretender';
import dataMock from './data-mocking';
import { unmountComponentAtNode } from 'react-dom';
import TestApplication from './test-application';
import chai from 'chai';

chai.use(sinonChai);
chai.use((chai, utils) => jqueryChai(chai, utils, jQuery));

export { default as $ } from 'jquery';

// mocha doesn't currently support es6 import
// e.g. import { it } from 'mocha';
let originalIt = window.it;

/**
 * This turns every call of `it` into a "convergent assertion." The
 * assertion is run every 10ms until it is either true, or it times
 * out. This makes it incredibly robust in the face of asynchronous
 * operations which could happen instantly, or they could happen after
 * 1.5 seconds. The assertion doesn't care unless until it's reflected
 * in the UI.
 *
 * The only caveat is that all assertions should be "pure" that is to
 * say, completely without side-effects.
 *
 * good:
 *  it('has some state', function() {
 *    expect(thing).to.be('awesome');
 *  });
 *
 * bad:
 *   it('twiddles when clicked', function() {
 *     click('.a-button');
 *     expect(thing).to.be('set');
 *   });
 *
 * @see https://github.com/cowboyd/react-acceptance-testing/blob/master/tests/test-helpers.js#L23
 */
export function it(...args) {
  if (args.length <= 1) {
    return originalIt(...args);
  } else {
    let [name, assertion] = args;
    return originalIt(name, function() {
      let timeout = this.timeout();
      let interval = 10;
      let start = new Date().getTime();
      let error = null;
      let test = this;

      return new Promise(function(resolve, reject) {
        (function loop() {
          try {
            assertion.call(test);
            resolve();
          } catch(e) {
            error = e;
            let now = new Date().getTime();
            if (now - start + interval >= timeout) {
              reject(e);
            } else {
              setTimeout(loop, interval);
            }
          }
        })();
      });
    });
  }
}

export function startApp() {
  before(function() {
    // start new pretender server to intercept XMLHttpRequests
    this.server = new Pretender(dataMock);
    this.testContainer = document.createElement('div');
    this.testContainer.id = `testing-${Math.random().toString(36).substring(7)}`;
    document.body.appendChild(this.testContainer);

    this.app = new TestApplication(App, this.testContainer);
  });

  after(function() {
    unmountComponentAtNode(this.testContainer);
    document.body.removeChild(this.testContainer);
    this.app = null;
    this.testContainer = null;
    this.server.shutdown();
  });

  beforeEach(function() {
    this.app.renderApp(App, this.testContainer);
  });

}
