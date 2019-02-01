import React from 'react';
import './Person.css'; // webpack can handle importing of stylesheets, style is scoped globally

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a Person and I am {props.name} {props.age} old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;
