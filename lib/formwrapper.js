var React = require('react');

/**
 * @class FormWrapper
 *
 * Wrapper up the logic for generating the correct rm3 url in the form tag.
 *
 * @member {Object} children The error to be displayed
 * @member {Function} onSubmit The function to be called before submit
 * @member {String} proto The proto to build the form tag around
 * @member {String} section The section ('edit' or 'create')
 * @member {String} encType The encoding type ('multipart/form-data') for uploads
 * @member {String} revisionId The revisionId to build the form tag around
 */
var FormWrapper = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    onSubmit: React.PropTypes.func,
    proto: React.PropTypes.string.isRequired,
    section: React.PropTypes.string.isRequired,
    encType: React.PropTypes.string,
    revisionId: React.PropTypes.string
  },

  render: function() {
    var action = 'create.html?type=' + this.props.proto;

    if (this.props.section === 'edit') {
      action = 'edit.html'
      if (this.props.revisionId) {
        action = action + '?revisionId=' + this.props.revisionId;
      }
    }
    return (<form id="userform-form" method="post" 
      action={action} className="pure-form pure-form-stacked"
      onSubmit={this.props.onSubmit} encType={this.props.encType}>
      {this.props.children}
      </form>);
  }
});

exports = module.exports = FormWrapper;
