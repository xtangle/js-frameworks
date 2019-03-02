import PropTypes from 'prop-types';
import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const Persons = (props) => {
  const { onClick, onChange, persons } = props;

  return persons.map(person => (
    <ErrorBoundary key={person.id}>
      <Person
        name={person.name}
        age={person.age}
        onClick={event => onClick(event, person.id)}
        onChange={event => onChange(event, person.id)}
      />
    </ErrorBoundary>
  ));
};

Persons.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  persons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  })),
};

Persons.defaultProps = {
  onClick: () => null,
  onChange: () => null,
  persons: [],
};

export default Persons;
