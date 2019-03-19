import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import styles from './App.css';
import Aux from '../hoc/Auxiliary/Auxiliary';
import withClass from '../hoc/WithClass/WithClass';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
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
    const newPersonName = event.target.value;
    this.setState((prevState) => {
      const { persons, changeCounter } = prevState;
      const personIndex = persons.findIndex(p => p.id === id);
      const newPerson = {
        ...persons[personIndex],
        name: newPersonName,
      };
      const newPersons = [...persons];
      newPersons[personIndex] = newPerson;
      return { persons: newPersons, changeCounter: changeCounter + 1 };
    });
  };

  deletePersonHandler = (event, id) => {
    this.setState((prevState) => {
      const { persons } = prevState;
      const newPersons = persons.filter(p => p.id !== id);
      return { persons: newPersons };
    });
  };

  togglePersonsHandler = () => {
    this.setState((prevState) => {
      const { showPersons } = prevState;
      const newShowPersons = !showPersons;
      return { showPersons: newShowPersons };
    });
  };

  render() {
    console.log('[App.js] render');

    const {
      showPersons, persons, showCockpit, changeCounter,
    } = this.state;
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
      <Aux>
        <button
          type="button"
          onClick={() => {
            this.setState({ showCockpit: !showCockpit });
          }}
        >
          Toggle Cockpit
        </button>
        <p>{`Times names changed: ${changeCounter}`}</p>
        {cockpitSection}
        {personsSection}
      </Aux>
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

export default withClass(App, styles.App);
