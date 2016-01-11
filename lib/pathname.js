var React = require('react');
var ReactIntl = require('react-intl');
var IntlMixin  = ReactIntl.IntlMixin;
var FormattedMessage  = ReactIntl.FormattedMessage;
var SitePath = require ('sitepath');

/**
 * @class PathNameComponent
 *
 * A pathname control that will give the user the choice of
 * an auto-generated slug or specifying the slug, with the
 * root path fixed.
 *
 * @member {String|SitePath} path The root of the pathanme
 * @member {String} leaf The 'slug' or final pathname
 */

var PathNameComponent = React.createClass({
  mixins: [IntlMixin],

  getInitialState: function() {
    if (this.props.leaf) {
      return {leaf: this.props.leaf, slug: false};
    } else {
      return {slug: true};
    }
  },

  slugSwitch: function(event) {
    this.setState({slug: event.target.checked});
  },

  leafChange: function(event) {
    this.setState({leaf: event.target.value});
  },

  render: function() {
    var path = this.props.path;
    if (path instanceof SitePath) {
      path = this.props.path.toDottedPath();
    }
    return (<fieldset>
      <div className="pure-u-1-3">
      <input className="pure-input-1" name="root" type="text" value={path}
        readOnly disabled />
      </div>
      <div className="pure-u-1-3">
      <input className="pure-input-1" type="text"
        value={this.state.leaf} disabled={this.state.slug} 
        name="leaf" onChange={this.leafChange}
        placeholder={this.getIntlMessage("PATH")} />
      </div>
      <div className="pure-u-1-3">
      <label htmlFor="autogenSlug" className="pure-checkbox">
        <input type="checkbox" onChange={this.slugSwitch} 
         checked={this.state.slug} name="autogenSlug" />
        <FormattedMessage message={this.getIntlMessage('AUTO_GENERATE_SLUG')} />
      </label>
      </div>
      </fieldset>);
  }
});

exports = module.exports = PathNameComponent;
