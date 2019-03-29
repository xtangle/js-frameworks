import PropTypes from 'prop-types';
import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => {
  const { show, onClick } = props;

  return show
    ? (
      <div
        className={classes.Backdrop}
        role="presentation"
        onClick={onClick}
      />
    )
    : null;
};

Backdrop.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
};

Backdrop.defaultProps = {
  show: false,
  onClick: () => null,
};

export default Backdrop;
