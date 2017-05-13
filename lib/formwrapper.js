var React = require('react');
var PropTypes = require('prop-types');

class FormWrapper extends React.Component {
  render() {
    var action = 'create.html?type=' + this.props.proto;

    if (this.props.section === 'edit') {
      action = 'edit.html';
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
}

FormWrapper.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  proto: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  encType: PropTypes.string,
  revisionId: PropTypes.string
};

exports = module.exports = FormWrapper;
