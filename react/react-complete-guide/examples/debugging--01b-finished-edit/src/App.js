import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 },
    ],
    // otherState: 'some other value',
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

  deletePersonHandler = (personIndex) => {
    const { persons } = this.state;
    const newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  };


  togglePersonsHandler = () => {
    const { showPersons } = this.state;
    const newShowPersons = !showPersons;
    this.setState({ showPersons: newShowPersons });
  };

  render() {
    const { showPersons, persons } = this.state;

    const btnClasses = [styles.Button];
    let newPersons = [];
    if (showPersons) {
      newPersons = (
        <div>
          {persons.map((person, i) => (
            <ErrorBoundary key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(i)}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            </ErrorBoundary>
          ))}
        </div>
      );
      btnClasses.push(styles.RedBtn);
    }

    const paragraphClasses = [];
    if (persons.length <= 2) {
      paragraphClasses.push(styles.red);
    }
    if (persons.length <= 1) {
      paragraphClasses.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>{'Hi, I\'m a React App'}</h1>
        <p className={paragraphClasses.join(' ')}>This is really working!</p>

        {/* Note: in JSX the click handler is onClick with a capital C! */}
        <button
          className={btnClasses.join(' ')}
          type="button"
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {newPersons}
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
