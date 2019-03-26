import PropTypes from 'prop-types';
import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => {
  const { label, onAdd, onRemove, disabled } = props;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        className={classes.Less}
        type="button"
        onClick={onRemove}
        disabled={disabled}
      >
        Less
      </button>
      <button
        className={classes.More}
        type="button"
        onClick={onAdd}
      >
        More
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  disabled: PropTypes.bool,
};

BuildControl.defaultProps = {
  onAdd: () => null,
  onRemove: () => null,
  disabled: false,
};

export default BuildControl;
