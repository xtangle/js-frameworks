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
  };

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
    const { showPersons, persons } = this.state;

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
        <Cockpit
          persons={persons}
          showPersons={showPersons}
          onButtonClick={this.togglePersonsHandler}
        />
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

export default App;
