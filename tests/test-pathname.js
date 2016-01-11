if (!global.Intl) {
    // No `Intl`, so use and load the polyfill.
    global.Intl = require('intl');
}

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var createComponent = require('./lib/create-component');
var should = require('chai').should()
var JsxForms = require('../lib/');
var SitePath = require ('sitepath');

var intl = {
  locales: 'en-US',
  messages: {
    AUTO_GENERATE_SLUG: 'Auto-generate slug',
    PATH: 'Path'
  }
};


describe('PathNameComponent', function() {
  it('should render with no leaf set', function() {
    var form = createComponent(JsxForms.PathNameComponent, {
      locales: intl.locales,
      messages: intl.messages,
      path: 'wh.cookie'
    });

    form.type.should.equal('fieldset');

    var rootInput = form.props.children[0].props.children;
    rootInput.type.should.equal('input');
    rootInput.props.value.should.equal('wh.cookie');

    var leafInput = form.props.children[1].props.children;
    leafInput.type.should.equal('input');
    leafInput.props.disabled.should.equal(true);

    var checkInput = form.props.children[2].props.children;
    checkInput.props.children[0].props.checked.should.equal(true);
  });

  it('should render with leaf set', function() {
    var form = createComponent(JsxForms.PathNameComponent, {
      locales: intl.locales,
      messages: intl.messages,
      path: 'wh.cookie',
      leaf: 'chocolate'
    });

    form.type.should.equal('fieldset');

    var rootInput = form.props.children[0].props.children;
    rootInput.type.should.equal('input');
    rootInput.props.value.should.equal('wh.cookie');

    var leafInput = form.props.children[1].props.children;
    leafInput.type.should.equal('input');
    leafInput.props.disabled.should.equal(false);
    leafInput.props.value.should.equal('chocolate');

    var checkInput = form.props.children[2].props.children;
    checkInput.props.children[0].props.checked.should.equal(false);
  });

  it('should render with SitePath instead of string', function() {
    var form = createComponent(JsxForms.PathNameComponent, {
      locales: intl.locales,
      messages: intl.messages,
      path: new SitePath(['wh', 'cookie'])
    });

    form.type.should.equal('fieldset');

    var rootInput = form.props.children[0].props.children;
    rootInput.type.should.equal('input');
    rootInput.props.value.should.equal('wh.cookie');

    var leafInput = form.props.children[1].props.children;
    leafInput.type.should.equal('input');
    leafInput.props.disabled.should.equal(true);

    var checkInput = form.props.children[2].props.children;
    checkInput.props.children[0].props.checked.should.equal(true);
  });
});
