import PropTypes from 'prop-types';
import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import styles from './Cockpit.css';

const Cockpit = (props) => {
  const { title, personsLength, showPersons, onTogglePersons } = props;
  const authContext = useContext(AuthContext);

  const toggleBtnRef = useRef(null);

  // only renders (because inputs = []) when component is rendered the first time,
  // and cleans up when the component is unmounted
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleBtnRef.current.click();
    // Http request
    const timer = setTimeout(() => {
      console.log('[Cockpit.js] Saved data to cloud!');
    }, 1000);
    console.log(`[Cockpit.js] authenticated: ${authContext.authenticated}`);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in 1st useEffect');
    };
  }, []);

  // useEffect(() => {
  //   console.log('[Cockpit.js] 2nd useEffect');
  //   return () => {
  //     console.log('[Cockpit.js] cleanup work in 2nd useEffect');
  //   };
  // });

  const paragraphClasses = [];
  if (personsLength <= 2) {
    paragraphClasses.push(styles.red);
  }
  if (personsLength <= 1) {
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
        ref={toggleBtnRef}
        className={btnClasses.join(' ')}
        type="button"
        onClick={onTogglePersons}
      >
        Toggle Persons
      </button>
      <button
        type="button"
        onClick={authContext.loginHandler}
      >
        Log in
      </button>
    </div>
  );
};

Cockpit.propTypes = {
  title: PropTypes.string.isRequired,
  personsLength: PropTypes.number.isRequired,
  showPersons: PropTypes.bool.isRequired,
  onTogglePersons: PropTypes.func,
};

Cockpit.defaultProps = {
  onTogglePersons: () => null,
};

export default React.memo(Cockpit);
