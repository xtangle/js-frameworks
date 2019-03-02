import PropTypes from 'prop-types';
import React from 'react';
import styles from './Cockpit.css';

const Cockpit = (props) => {
  const {
    title, persons, showPersons, onButtonClick,
  } = props;

  const paragraphClasses = [];
  if (persons.length <= 2) {
    paragraphClasses.push(styles.red);
  }
  if (persons.length <= 1) {
    paragraphClasses.push(styles.bold);
  }

  const btnClasses = [];
  if (showPersons) {
    btnClasses.push(styles.RedBtn);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{title}</h1>
      <p className={paragraphClasses.join(' ')}>This is really working!</p>

      {/* Note: in JSX the click handler is onClick with a capital C! */}
      <button
        className={btnClasses.join(' ')}
        type="button"
        onClick={onButtonClick}
      >
        Toggle Persons
      </button>
    </div>
  );
};

Cockpit.propTypes = {
  title: PropTypes.string.isRequired,
  persons: PropTypes.arrayOf(PropTypes.any).isRequired,
  showPersons: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func,
};

Cockpit.defaultProps = {
  onButtonClick: () => null,
};

export default Cockpit;
