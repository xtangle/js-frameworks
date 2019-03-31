import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';

const Layout = (props) => {
  const { children } = props;
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      <Toolbar
        onDrawerToggleClick={sideDrawerToggleHandler}
      />
      <SideDrawer
        show={showSideDrawer}
        onBackdropClick={sideDrawerToggleHandler}
      />
      <main className={classes.Content}>
        {children}
      </main>
    </Aux>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
