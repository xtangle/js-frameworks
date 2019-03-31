import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';

const Toolbar = (props) => {
  const { onDrawerToggleClick } = props;

  return (
    <header className={classes.Toolbar}>
      <DrawerToggle
        onClick={onDrawerToggleClick}
      />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  onDrawerToggleClick: PropTypes.func,
};


Toolbar.defaultProps = {
  onDrawerToggleClick: () => null,
};

export default Toolbar;
