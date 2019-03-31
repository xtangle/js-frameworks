import PropTypes from 'prop-types';
import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const SideDrawer = (props) => {
  const { show, onBackdropClick } = props;

  const attachedClasses = [
    classes.SideDrawer,
    show ? classes.Open : classes.Close,
  ];

  return (
    <Aux>
      <Backdrop
        show={show}
        onClick={onBackdropClick}
      />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool,
  onBackdropClick: PropTypes.func,
};

SideDrawer.defaultProps = {
  show: false,
  onBackdropClick: () => null,
};

export default SideDrawer;
