var React = require('react');
var ReactIntl = require('react-intl');
var IntlProvider = ReactIntl.IntlProvider;
var FormattedMessage  = ReactIntl.FormattedMessage;

/**
 * @class SubmitButton
 *
 * @member {boolean} isDraft if we are editing a draft
 * @member {string} buttonMessage the message for the button
 */

var SubmitButton = React.createClass({
  onClick: function (event) {
    var self = this;
    if(self.props.onClick) {
      return self.props.onClick(event);
    }
  },

  render: function() {
    var buttonMessage = this.props.buttonMessage;
    var disabled = this.props.disabled;

    if (this.props.isDraft) {
      return (<IntlProvider messages={this.props.messages} locale='en'><fieldset>
        <div className="pure-g-r">
          <div className="pure-u-1-3">
            <button type="submit" onClick={this.onClick} disabled={disabled} className="pure-button pure-button-primary">{buttonMessage}</button>
          </div>
          <div className="pure-u-1-3">
            <label htmlFor="saveAsDraft" className="pure-checkbox">
              <input id="saveAsDraft" name="saveAsDraft" type="checkbox" value="true" defaultChecked="true" />
              <FormattedMessage id={'SAVE_AS_DRAFT'} />
            </label>
          </div>
          <div className="pure-u-1-3">
            <label htmlFor="createNewDraft" className="pure-checkbox">
              <input id="createNewDraft" name="createNewDraft" type="checkbox" value="true" />
              <FormattedMessage id={'CREATE_NEW_DRAFT'} />
            </label>
          </div>
        </div>
        </fieldset></IntlProvider>)
    } else {
      return (<IntlProvider messages={this.props.messages} locale='en'><fieldset>
        <div className="pure-g-r">
          <div className="pure-u-1-3">
            <button type="submit" onClick={this.onClick} disabled={disabled} className="pure-button pure-button-primary">{buttonMessage}</button>
          </div>
          <div className="pure-u-2-3">
            <label htmlFor="saveAsDraft" className="pure-checkbox">
              <input id="saveAsDraft" name="saveAsDraft" type="checkbox" value="true" />
              <FormattedMessage id={'SAVE_AS_DRAFT'} />
            </label>
          </div>
        </div>
        </fieldset></IntlProvider>)
    }
  }
})

exports = module.exports = SubmitButton;
