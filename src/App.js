import logo from './logo.svg';
import './App.css';
import Direction from './component/Direction';
import { useRef, useState } from 'react';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const originRef = useRef('');
  const destinationRef = useRef('');

  const handleDirection = e => {
    setOrigin(originRef.current.value);
    setDestination(destinationRef.current.value);
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleDirection}>
        <input type="text" name="" ref={originRef} placeholder="Start from" id="" />
        <br />
        <input type="text" ref={destinationRef} name="" placeholder="Destination" id="" />
        <br />
        <input type="submit" name="" value="Get Direction" id="" />
      </form>
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
