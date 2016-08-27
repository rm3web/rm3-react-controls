if (!global.Intl) {
    // No `Intl`, so use and load the polyfill.
    global.Intl = require('intl');
}

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var createComponent = require('./lib/create-component');
var should = require('chai').should()
var JsxForms = require('../lib/');

var intl = {
  locales: 'en-US',
  messages: {
    CREATE_NEW_DRAFT: 'Create new draft',
    SAVE_AS_DRAFT: 'Save as draft'
  }
};

function dummyFunc()
{
};


describe('FormWrapper', function() {
  it('should render create', function() {
    var form = createComponent(JsxForms.FormWrapper, {
      onSubmit: dummyFunc,
      proto: 'fo',
      section: 'create'
    });

    form.type.should.equal('form');
    form.props.id.should.equal('userform-form');
    form.props.method.should.equal('post');
    form.props.action.should.equal('create.html?type=fo');
    form.props.onSubmit.should.equal(dummyFunc);
  });

  it('should render edit', function() {
    var form = createComponent(JsxForms.FormWrapper, {
      onSubmit: dummyFunc,
      proto: 'fo',
      section: 'edit'
    });

    form.type.should.equal('form');
    form.props.id.should.equal('userform-form');
    form.props.method.should.equal('post');
    form.props.action.should.equal('edit.html');
    form.props.onSubmit.should.equal(dummyFunc);
  });

  it('should render edit with a revision', function() {
    var form = createComponent(JsxForms.FormWrapper, {
      onSubmit: dummyFunc,
      proto: 'fo',
      section: 'edit',
      revisionId: '233'
    });

    form.type.should.equal('form');
    form.props.id.should.equal('userform-form');
    form.props.method.should.equal('post');
    form.props.action.should.equal('edit.html?revisionId=233');
    form.props.onSubmit.should.equal(dummyFunc);
  });

  it('should render with encType', function() {
    var form = createComponent(JsxForms.FormWrapper, {
      onSubmit: dummyFunc,
      proto: 'fo',
      section: 'edit',
      revisionId: '233',
      encType: 'multipart/form-data'
    });

    form.type.should.equal('form');
    form.props.id.should.equal('userform-form');
    form.props.method.should.equal('post');
    form.props.action.should.equal('edit.html?revisionId=233');
    form.props.onSubmit.should.equal(dummyFunc);
    form.props.encType.should.equal('multipart/form-data');
  });

});
