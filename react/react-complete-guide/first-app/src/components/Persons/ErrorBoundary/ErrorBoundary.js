import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
    errorInfo: '',
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error.toString(),
      errorInfo: JSON.stringify(info, null, 2),
    });
  };

  render() {
    const { hasError, errorMessage, errorInfo } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <h1>{errorMessage}</h1>
          <p>{errorInfo}</p>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

ErrorBoundary.defaultProps = {
  children: null,
};

export default ErrorBoundary;
