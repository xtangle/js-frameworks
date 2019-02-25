import PropTypes from 'prop-types';
import React from 'react';

const Validation = (props) => {
  const { length } = props;
  const isSufficientLength = length >= 5;
  const message = isSufficientLength ? 'Text long enough' : 'Text too short';

  return (
    <p>{message}</p>
  );
};

Validation.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Validation;
