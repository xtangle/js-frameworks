import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Person.css';

class Person extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Person.js] componentDidUpdate', prevProps, prevState, snapshot);
  }

  render() {
    console.log('[Person.js] rendering...');
    const {
      onClick, onChange, name, age, children,
    } = this.props;

    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid purple',
      cursor: 'pointer',
    };

    return (
      <div className={styles.Person}>
        <button
          type="button"
          style={btnStyle}
          onClick={onClick}
        >
          Remove me
        </button>
        <p>{`I'm a Person and I am ${name} ${age} old!`}</p>
        <p>{children}</p>
        <input
          type="text"
          onChange={onChange}
          value={name}
        />
      </div>
    );
  }
}

Person.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  children: PropTypes.node,
};

Person.defaultProps = {
  onClick: () => null,
  onChange: () => null,
  children: null,
};

export default Person;
