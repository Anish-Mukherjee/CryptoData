import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class App extends React.Component{
  render(){
    let task;
    if (fiftyFifty) {
      task = "WOO!"
    } else {
      task = "to bed"
    }
    return <h1>{task}</h1>;
  };
};

export default App;
