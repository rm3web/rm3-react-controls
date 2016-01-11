if (!global.Intl) {
    // No `Intl`, so use and load the polyfill.
    global.Intl = require('intl');
}

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var createComponent = require('./lib/create-component');
var should = require('chai').should()
var JsxForms = require('../lib/index.jsx');
var SitePath = require ('sitepath');

describe('SingleError', function() {
  it('should render', function() {
    var form = createComponent(JsxForms.SingleError, {
      error: 'stuff went wrong'
    });

    form.type.should.equal('li');
    form.props.children.should.equal('stuff went wrong');
  });
});

describe('ErrorsList', function() {
  it('should render an empty list', function() {
    var form = createComponent(JsxForms.ErrorsList, {
      errors: []
    });

    form.type.should.equal('div');
  });

  it('should render', function() {
    var form = createComponent(JsxForms.ErrorsList, {
      errors: ['stuff went wrong']
    });

    form.type.should.equal('div');
    var errorList = form.props.children;
    errorList.type.should.equal('ul');
    var singleError = errorList.props.children[0];
    singleError.type.displayName.should.equal('SingleError');
    singleError.props.error.should.equal('stuff went wrong');
    singleError.key.should.equal('0');
  });
});
