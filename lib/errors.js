var React = require('react');

/**
 * @class SingleError
 *
 * A single error
 *
 * @member {String} error The error to be displayed
 */
var SingleError = React.createClass({
  render: function() {
    return (<li>
      {this.props.error}
      </li>);
  }
});

/**
 * @class ErrorsList
 *
 * A list of errors.
 *
 * @member {Array} errors The errors to be displayed
 */
var ErrorsList = React.createClass({
  render: function() {
    if (this.props.errors) {
      return (<div><ul>
      {this.props.errors.map(function(error, i){
          return (<SingleError key={i} error={error} />);
      })}
      </ul></div>);
    } else {
      return <div />;
    }
  }
});

exports.SingleError = SingleError;
exports.ErrorsList = ErrorsList;