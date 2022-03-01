import { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();
  const countRef = useRef(1);
  const previousNameRef = useRef('');

  //Focus on input field
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'red';
  }, []);

  //Keep track of how many times our component renders
  useEffect(() => {
    countRef.current = countRef.current + 1;
  }, [name]);

  //Keep track of previous entry
  useEffect(() => {
    previousNameRef.current = name;
  }, [name]);

  console.log(countRef);

  return (
    <main>
      <input
        type='text'
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
      <br />
      <br />
      <br />
      <br />
      <p>Rendered {countRef.current} times</p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Previous name was {previousNameRef.current}, with a length of{' '}
        {previousNameRef.current.length}
      </p>
    </main>
  );
};

export default App;
