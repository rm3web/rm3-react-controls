var React = require('react');
var ReactDOM = require('react-dom');
var JsxForms = require('../dist/');

var intl = {
  locales: 'en-US',
  messages: {
    AUTO_GENERATE_SLUG: 'Auto-generate slug',
    PATH: 'Path'
  }
};

ReactDOM.render(
  <div>
    <h2>Pathname control</h2>
    <JsxForms.PathNameComponent locales={intl.locales} messages={intl.messages}
      path="wh" leaf="blah" />
  </div>
  ,
  document.getElementById('pathname')
);