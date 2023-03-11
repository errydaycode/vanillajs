import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ["Dimych", "Sveta", "Ivan", "Daniil", "Ignat", "Viktor"]
  const users = [
    {name: "Dimych"},
    {name: "Sveta"},
    {name: "Ivan"},
    {name: "Daniil"},
    {name: "Ignat"},
    {name: "Viktor"}
  ]
  const liNames = users.map((n, index)=> <li key={index}>{index} - {n.name}</li>)
  return (
    <div className="App">
      {liNames}
    </div>
  );
}

export default App;
