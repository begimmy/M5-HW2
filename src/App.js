import React, { useState } from 'react';

const App = () => {
const [input, setInput] = useState('');
const [names, setNames] = useState(JSON.parse(localStorage.getItem('names')) || []);

const inputChange = (event) => {
  setInput(event.target.value);
};

const buttonClick = () => {
  if (input) {
    const updatedNames = [...names, input];
    setNames(updatedNames);
    setInput('');
    localStorage.setItem('names', JSON.stringify(updatedNames));
  }
};
  return (
    <div>
      <input type="text" value={input} onChange={inputChange} />
      <button onClick={buttonClick}>Add</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );

}
export default App;
