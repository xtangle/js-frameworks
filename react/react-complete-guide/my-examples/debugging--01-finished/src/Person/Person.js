import PropTypes from 'prop-types';
import React from 'react';
import styles from './Person.css';

const Person = (props) => {
  const {
    click, changed, name, age, children,
  } = props;

  const btnStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid purple',
    cursor: 'pointer',
  };

  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error('Something went wrong');
  }

  return (
    <div className={styles.Person}>
      <button
        type="button"
        style={btnStyle}
        onClick={click}
      >
        Remove me
      </button>
      <p>{`I'm a Person and I am ${name} ${age} old!`}</p>
      <p>{children}</p>
      <input
        type="text"
        onChange={changed}
        value={name}
      />
    </div>
  );
};

Person.propTypes = {
  click: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  children: PropTypes.node,
};

Person.defaultProps = {
  children: null,
};

export default Person;
