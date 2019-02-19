import React from 'react';

const divStyle = {
  textAlign: 'center',
};

const inputStyle = {
  width: '50%',
  margin: '0 auto',
  border: '5px solid pink',
  boxShadow: '0 2px 3px #ccc',
  textAlign: 'center',
};

const userInput = (props) => {
  return (
    <div style={divStyle}>
      <input style={inputStyle} type="text" onChange={(event) => props.inputChange(event.target.value)} value={props.username}/>
    </div>
  );
};

export default userInput;
