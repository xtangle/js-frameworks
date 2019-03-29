import PropTypes from 'prop-types';
import React from 'react';
import classes from './Button.css';

const Button = (props) => {
  const { children, type, onClick } = props;

  return (
    <button
      className={[classes.Button, classes[type]].join(' ')}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['Success', 'Danger']).isRequired,
  onClick: PropTypes.func,
};


Button.defaultProps = {
  children: null,
  onClick: () => null,
};

export default Button;
