import React, { Component } from 'react';
import MyName from './MyName'
import Counter from './Counter';
import Clock from './Clock';
import Item from './Item';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Clock />
      </div>
    );
  }
}

export default App;
