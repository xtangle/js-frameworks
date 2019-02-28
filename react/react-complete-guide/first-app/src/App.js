import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';

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

  nameChangedHandler = (event, id) => {
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

    // inline styles in javascript, style is scoped to component
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let newPersons = [];
    if (showPersons) {
      newPersons = (
        <div>
          {persons.map((person, i) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(i)}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      );
      buttonStyle.backgroundColor = 'red';
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
          type="button"
          style={buttonStyle}
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
