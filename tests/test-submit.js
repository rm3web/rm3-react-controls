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

describe('SubmitButton', function() {
  it('should render', function() {
    var form = createComponent(JsxForms.SubmitButton, {
      locales: intl.locales,
      messages: intl.messages,
      isDraft: false,
      buttonMessage: 'eee'
    }).props.children;

    form.type.should.equal('fieldset');
    var formBody = form.props.children.props.children;

    formBody[0].type.should.equal('div');
    formBody[0].props.className.should.equal('pure-u-1-3');
    formBody[0].props.children.type.should.equal('button');
    formBody[0].props.children.props.children.should.equal('eee');
    
    formBody[1].type.should.equal('div');
    formBody[1].props.className.should.equal('pure-u-2-3');
    var saveAsCheckbox = formBody[1].props.children;

    saveAsCheckbox.props.htmlFor.should.equal('saveAsDraft');
    saveAsCheckbox.type.should.equal('label');
    saveAsCheckbox.props.children.length.should.equal(2);
    saveAsCheckbox.props.children[0].type.should.equal('input');
    saveAsCheckbox.props.children[0].props.name.should.equal('saveAsDraft');
    saveAsCheckbox.props.children[0].props.value.should.equal('true');

    saveAsCheckbox.props.children[1].props.id.should.equal('SAVE_AS_DRAFT');
  });

  it('should render in draft mode', function() {
    var form = createComponent(JsxForms.SubmitButton, {
      locales: intl.locales,
      messages: intl.messages,
      isDraft: true,
      buttonMessage: 'qqq'
    }).props.children;

    form.type.should.equal('fieldset');
    var formBody = form.props.children.props.children;

    formBody[0].type.should.equal('div');
    formBody[0].props.className.should.equal('pure-u-1-3');
    formBody[0].props.children.type.should.equal('button');
    formBody[0].props.children.props.children.should.equal('qqq');
    
    formBody[1].type.should.equal('div');
    formBody[1].props.className.should.equal('pure-u-1-3');
    var saveAsCheckbox = formBody[1].props.children;

    saveAsCheckbox.props.htmlFor.should.equal('saveAsDraft');
    saveAsCheckbox.type.should.equal('label');
    saveAsCheckbox.props.children.length.should.equal(2);
    saveAsCheckbox.props.children[0].type.should.equal('input');
    saveAsCheckbox.props.children[0].props.name.should.equal('saveAsDraft');
    saveAsCheckbox.props.children[0].props.value.should.equal('true');
    saveAsCheckbox.props.children[0].props.defaultChecked.should.equal('true');

    saveAsCheckbox.props.children[1].props.id.should.equal('SAVE_AS_DRAFT');

    formBody[2].type.should.equal('div');
    formBody[2].props.className.should.equal('pure-u-1-3');
    var createNewDraftCheckbox = formBody[2].props.children;

    createNewDraftCheckbox.props.htmlFor.should.equal('createNewDraft');
    createNewDraftCheckbox.type.should.equal('label');
    createNewDraftCheckbox.props.children.length.should.equal(2);
    createNewDraftCheckbox.props.children[0].type.should.equal('input');
    createNewDraftCheckbox.props.children[0].props.name.should.equal('createNewDraft');
    createNewDraftCheckbox.props.children[0].props.value.should.equal('true');

    createNewDraftCheckbox.props.children[1].props.id.should.equal('CREATE_NEW_DRAFT');
  });

});
