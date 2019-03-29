import PropTypes from 'prop-types';
import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const Toolbar = (props) => {
  const { children } = props;

  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        ...
        {children}
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  children: PropTypes.node,
};


Toolbar.defaultProps = {
  children: null,
};

export default Toolbar;
