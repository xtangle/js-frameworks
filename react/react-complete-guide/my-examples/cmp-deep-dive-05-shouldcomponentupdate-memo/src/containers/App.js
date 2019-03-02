import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import styles from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
    showCockpit: true,
  };

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] shouldComponentUpdate', nextProps, nextState, nextContext);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate', prevProps, prevState, snapshot);
  }

  nameChangeHandler = (event, id) => {
    const { persons } = this.state;
    const personIndex = persons.findIndex(p => p.id === id);
    const newPerson = {
      ...persons[personIndex],
      name: event.target.value,
    };
    const newPersons = [...persons];
    newPersons[personIndex] = newPerson;

    this.setState({ persons: newPersons });
  };

  deletePersonHandler = (event, id) => {
    const { persons } = this.state;
    const newPersons = persons.filter(p => p.id !== id);
    this.setState({ persons: newPersons });
  };

  togglePersonsHandler = () => {
    const { showPersons } = this.state;
    const newShowPersons = !showPersons;
    this.setState({ showPersons: newShowPersons });
  };

  render() {
    console.log('[App.js] render');

    const { showPersons, persons, showCockpit } = this.state;
    const { appTitle } = this.props;

    const cockpitSection = showCockpit
      ? (
        <Cockpit
          title={appTitle}
          personsLength={persons.length}
          showPersons={showPersons}
          onButtonClick={this.togglePersonsHandler}
        />
      )
      : null;

    const personsSection = showPersons
      ? (
        <Persons
          persons={persons}
          onClick={this.deletePersonHandler}
          onChange={this.nameChangeHandler}
        />
      )
      : null;

    return (
      <div className={styles.App}>
        <button
          type="button"
          onClick={() => {
            this.setState({ showCockpit: !showCockpit });
          }}
        >
          Toggle Cockpit
        </button>
        {cockpitSection}
        {personsSection}
      </div>
    );

    // Compiles to the following code:
    // return React.createElement(
    //   'div',
    //   {className: 'App'},
    //   React.createElement('h1', null,'Hi, I\'m a React App')
    // );
  }
}

App.propTypes = {
  appTitle: PropTypes.string.isRequired,
};

export default App;
