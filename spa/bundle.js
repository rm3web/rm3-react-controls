var React = require('react');
var ReactDOM = require('react-dom');
var JsxForms = require('../lib/');

var intl = {
  locales: 'en-US',
  messages: {
    AUTO_GENERATE_SLUG: 'Auto-generate slug',
    CONFIRM_PASSWORD: 'Confirm password',
    CREATE_NEW_DRAFT: 'Create new draft',
    PATH: 'Path',
    PASSWORD: 'Password',
    PASSWORD_ENTER_TWICE: 'Password (Enter twice)',
    SAVE_AS_DRAFT: 'Save as draft',
  }
};

ReactDOM.render(
  <div>
    <h2>Pathname control</h2>
    <form id="userform-form" method="post" className="pure-form pure-form-stacked">
    <JsxForms.PathNameComponent locales={intl.locales} messages={intl.messages}
      path="wh" leaf="blah" />
    </form>
    <h2>Password Field Set</h2>
    <form id="userform-form" method="post" className="pure-form pure-form-stacked">
    <JsxForms.PasswordFieldSet locales={intl.locales} messages={intl.messages} display={true}
       errors= {{}} />
    </form>
    <h2>Submit Button</h2>
    <JsxForms.SubmitButton locales={intl.locales} messages={intl.messages} isDraft={true} buttonMessage={'qqqq'} />
    <JsxForms.SubmitButton locales={intl.locales} messages={intl.messages} isDraft={false} buttonMessage={'ffffff'} />
  </div>
  ,
  document.getElementById('pathname')
);