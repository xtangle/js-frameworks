import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState, nextContext);
    const { persons } = this.props;
    return (nextProps.persons !== persons);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState);
    return { message: 'Snapshot!' };
  }

  render() {
    console.log('[Persons.js] rendering...');
    const { onClick, onChange, persons } = this.props;

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
  }
}

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
