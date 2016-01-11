if (!global.Intl) {
    // No `Intl`, so use and load the polyfill.
    global.Intl = require('intl');
}

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var createComponent = require('./lib/create-component');
var should = require('chai').should()
var JsxForms = require('../lib/jsx_forms.jsx');
var SitePath = require ('sitepath');

var intl = {
  locales: 'en-US',
  messages: {
  ABSTRACT: 'Abstract',
  ADD: 'Add',
  ADD_TAG: 'Add Tag',
  ADD_TO_NAVBAR: 'Add to navbar',
  ADMIN: 'Admin',
  AUTO_GENERATE_SLUG: 'Auto-generate slug',
  BAD_ID_IN_COOKIE: 'Bad ID in cookie',
  COMMENT: "Comment",
  CONFIRM_PASSWORD: 'Confirm password',
  CREATE: 'Create',
  DELETE: 'Delete',
  DESCRIPTION: 'Description',
  DISABLE_LOGIN: 'Disable login',
  DO_YOU_REALLY_WANT_TO_GO_HERE: 'Do you really want to go here?',
  DRAFTS: 'Drafts',
  EDIT: 'Edit',
  EDIT_REV: 'Edit based on this revision',
  EMAIL: 'Email',
  ERROR: 'Error',
  EVENT_TYPE: 'Event Type',
  FIELD_EMPTY: 'Field Empty',
  GEAR: 'Gear',
  FACETED_BY_MONTH: 'Faceted by month',
  FORBIDDEN: 'Forbidden',
  FULL_NAME: 'Full name',
  HISTORY: 'History',
  HTML: 'HTML',
  LAST_UPDATED: 'Last updated',
  LOGIN: 'Login',
  LOGIN_ASCII_TEXT_NOSPACES: 'Login (ASCII text, no spaces)',
  LOGOUT: 'Logout',
  MARKDOWN: 'Markdown',
  NAVBAR: 'Navbar',
  MOVE: 'Move',
  NO_VIEW_FOUND_FOR_THAT_URL: 'No view found for that URL',
  NOT_FOUND: 'Not Found',
  OBJECT: 'Object',
  PAGINATED: 'Paginated',
  PASSWORD: 'Password',
  PASSWORD_ENTER_TWICE: 'Password (Enter twice)',
  PASSWORD_VALIDATION_FAILED: 'Password validation failed',
  PATH: 'Path',
  POSTED: 'Posted',
  POSTING: 'Posting',
  PREDICATE: 'Predicate',
  PROFILE_TEXT: 'Profile Text',
  PROFILE_URL: 'Profile URL',
  PROTO_BASE: 'Default Node',
  PROTO_BLOG: 'Blog',
  PROTO_COMMENT: 'Comment',
  PROTO_INDEX: 'Index (temp)',
  PROTO_META: 'Metadata Index',
  PROTO_PREDICATE: 'Predicate',
  PROTO_USER: 'User',
  PUBLISH: 'Publish',
  PUBLISH_SILENTLY: 'Publish silently',
  REVISION_ID: 'Revision Id',
  REVISION_NUM: 'Revision Num',
  SAVE_AS_DRAFT: 'Save as draft',
  SUBMIT: 'Submit',
  TAG: 'Tag',
  THIS_ACTION_IS_NOT_PERMITTED: 'This action is not permitted',
  TIME: 'Time',
  TITLE: 'Title',
  URL: 'URL',
  USER: 'User',
  USERNAME: 'Username',
  VALIDATION_ERROR: 'Validation Error',
  YOU_ARE_EDITING_AN_OLD_REV: 'You are editing based on an old revision.  Saving will overwrite any interevening changes.',
  YOU_HAVE_BEEN_LOGGED_IN: 'You have been logged in'
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
