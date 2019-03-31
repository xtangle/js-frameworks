import PropTypes from 'prop-types';
import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
  const { children, link, active } = props;

  return (
    <li className={classes.NavigationItem}>
      <a
        href={link}
        className={active ? classes.active : null}
      >
        {children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  active: PropTypes.bool,
};

NavigationItem.defaultProps = {
  children: null,
  link: '',
  active: false,
};

export default NavigationItem;
