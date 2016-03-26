var React = require('react');
var ReactIntl = require('react-intl');
var IntlMixin  = ReactIntl.IntlMixin;
var FormattedMessage  = ReactIntl.FormattedMessage;
var ErrorsList = require('./errors').ErrorsList;

var PasswordFieldSet =  React.createClass({
  mixins: [IntlMixin],

  getInitialState: function() {
    if (this.props.errors) {
      return {errors: this.props.errors};
    } else {
      return {errors: {}};
    }
  },

  render: function() {
    if (this.props.display) {
      return (<fieldset>
      <label htmlFor="password" className="pure-input-1"><FormattedMessage message={this.getIntlMessage('PASSWORD_ENTER_TWICE')} />:</label>
        <input className="pure-input-1" type="password" defaultValue="" id="password1" name="password1" placeholder={this.getIntlMessage('PASSWORD')} />
        <ErrorsList errors={this.state.errors.password1} />
        <input className="pure-input-1" type="password" defaultValue="" id="password2" name="password2" placeholder={this.getIntlMessage('CONFIRM_PASSWORD')} />
        <ErrorsList errors={this.state.errors.password2} />
      </fieldset>)
    } else {
      return (<span></span>);
    }
  }
});


exports = module.exports = PasswordFieldSet;
