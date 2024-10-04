import './App.css';
import pi, {double, triple} from './1.jsx';
import React from 'react';
import main from './components/One.jsx';

const three ={
  color: 'blue',
  background: 'yellow'
}

function App() {
  return (
    <div className="App">
      <ul>
        <li style={{color: 'red'}}>{pi}</li>
        <li style={{color: 'green'}}>{double()}</li>
        <li style={three}>{triple()}</li>\
        <li>{main()}</li>
      </ul>
    </div>
  );
}

export default App;
