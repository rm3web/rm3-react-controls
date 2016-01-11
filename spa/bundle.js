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

var renderTarget = document.getElementById('pathname');
var PathFactory = React.createFactory(JsxForms.PathNameComponent);

var renderedComponent = ReactDOM.render(
  PathFactory({
    locales: intl.locales,
    messages: intl.messages,
    path: "wh",
    leaf: "blah"
  }),
  renderTarget
);
