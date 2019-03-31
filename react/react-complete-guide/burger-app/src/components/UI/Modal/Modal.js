import PropTypes from 'prop-types';
import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

function shouldNotUpdate(prevProps, nextProps) {
  return prevProps.show === nextProps.show;
}

const Modal = (props) => {
  const { children, show, onClose } = props;

  return (
    <Aux>
      <Backdrop
        show={show}
        onClick={onClose}
      />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </Aux>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  show: false,
  onClose: () => null,
};

export default React.memo(Modal, shouldNotUpdate);
