import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;

    return (
      <Aux>
        <Toolbar
          onDrawerToggleClick={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          show={showSideDrawer}
          onBackdropClick={this.sideDrawerToggleHandler}
        />
        <main className={classes.Content}>
          {children}
        </main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
