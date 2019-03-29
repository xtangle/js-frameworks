import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <Aux>
      <Toolbar />
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
