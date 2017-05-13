var React = require('react');
var PropTypes = require('prop-types');

class SingleError extends React.Component {
  render() {
    return (<li>
      {this.props.error}
      </li>);
  }
}

SingleError.propTypes = {
  error: PropTypes.string.isRequired
};

SingleError.displayName = "SingleError";

class ErrorsList extends React.Component {
  render() {
    if (this.props.errors) {
      return (<div><ul>
      {this.props.errors.map(function(error, i) {
        return (<SingleError key={i} error={error} />);
      })}
      </ul></div>);
    } else {
      return <div />;
    }
  }
}

ErrorsList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string)
};

exports.SingleError = SingleError;
exports.ErrorsList = ErrorsList;
