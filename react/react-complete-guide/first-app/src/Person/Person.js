import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';
import './Person.css'; // webpack can handle importing of stylesheets, style is scoped globally

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

  const personStyle = {
    '@media (max-width: 300px)': {
      width: '180px',
    },
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };

  return (
    <div className="Person" style={personStyle}>
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
  children: '',
};

export default Radium(Person);
