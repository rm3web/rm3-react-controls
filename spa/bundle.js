var React = require('react');
var ReactDOM = require('react-dom');
var JsxForms = require('../lib/');

var intl = {
  locales: 'en-US',
  messages: {
    AUTO_GENERATE_SLUG: 'Auto-generate slug',
    CONFIRM_PASSWORD: 'Confirm password',
    PATH: 'Path',
    PASSWORD: 'Password',
    PASSWORD_ENTER_TWICE: 'Password (Enter twice)'
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
  </div>
  ,
  document.getElementById('pathname')
);