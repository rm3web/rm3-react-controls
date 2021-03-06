var React = require('react');
var ReactIntl = require('react-intl');
var IntlProvider = ReactIntl.IntlProvider;
var FormattedMessage  = ReactIntl.FormattedMessage;
var ErrorsList = require('./errors').ErrorsList;
var zxcvbn = require('zxcvbn');
var PropTypes = require('prop-types');

var names = {
  0: "Risky password",
  1: "Very guessable password",
  2: "Somewhat guessable password",
  3: "Safely unguessable password",
  4: "Very unguessable password"
};

var PasswordFieldSet = ReactIntl.injectIntl(class pfs extends React.Component {
  constructor(props) {
    super(props);
    if (props.errors) {
      this.state = {errors: this.props.errors};
    } else {
      this.state = {errors: {}};
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({strength: zxcvbn(event.target.value).score});
  }

  render() {
    var strength = this.state.strength;
    if (!strength) {
      strength = 0;
    }

    var strengthBar = (<div className={'pure-u-' + (strength + 1) + '-5'} style={{height: "2em", background: "#eee"}}></div>);
    var strengthText = names[strength];
    if (this.props.display) {
      return (<fieldset className="pure-group">
      <label htmlFor="password" className="pure-input-1"><FormattedMessage id={'PASSWORD_ENTER_TWICE'} />:</label>
      <div className="pure-g">
        <div className="pure-u-2-3">
        <input className="pure-u-23-24" onChange={this.handleChange} type="password" defaultValue="" id="password1" name="password1" placeholder={this.props.intl.formatMessage({id: "PASSWORD"})} />
        <ErrorsList errors={this.state.errors.password1} />
        </div>
        <div className="pure-u-1-3">
        {strengthBar}
        </div>
      </div>
      <div className="pure-g">
        <div className="pure-u-2-3">
        <input className="pure-u-23-24" type="password" defaultValue="" id="password2" name="password2" placeholder={this.props.intl.formatMessage({id: "CONFIRM_PASSWORD"})} />
        <ErrorsList errors={this.state.errors.password2} />
        </div>
        <div className="pure-u-1-3">
        {strengthText}
        </div>
      </div>
      </fieldset>);
    } else {
      return (<span></span>);
    }
  }
});

PasswordFieldSet.displayName = "PasswordFieldSet";

PasswordFieldSet.propTypes = {
  errors: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  intl: PropTypes.object,
  display: PropTypes.bool
};

var PasswordFieldSetWrapper = function PasswordFieldSetWrapper(props) {
  return (<IntlProvider messages={props.messages} locale="en">
    <PasswordFieldSet {...props} />
  </IntlProvider>);
};

PasswordFieldSetWrapper.propTypes = {
  messages: PropTypes.object.isRequired
};

exports = module.exports = PasswordFieldSetWrapper;
