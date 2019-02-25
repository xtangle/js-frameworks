import PropTypes from 'prop-types';
import React from 'react';
import './Char.css';

const Char = (props) => {
  const { value, onClick } = props;

  return (
    <span
      className="Char"
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
    >
      {value}
    </span>
  );
};

Char.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Char.defaultProps = {
  onClick: () => {},
};

export default Char;
