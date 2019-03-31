import PropTypes from 'prop-types';
import React from 'react';
import classes from './DrawerToggle.css';

const DrawerToggle = (props) => {
  const { onClick } = props;

  return (
    <div
      className={classes.DrawerToggle}
      tabIndex="0"
      role="button"
      onClick={onClick}
      onKeyPress={onClick}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

DrawerToggle.propTypes = {
  onClick: PropTypes.func,
};


DrawerToggle.defaultProps = {
  onClick: () => null,
};

export default DrawerToggle;
