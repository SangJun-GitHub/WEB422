import React, { Component } from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navbar from'./Navber';
import Panel from './Panel';
import ListNames from './ListNames';
import Outer from './Outer';
import Home from './Home';
import Project from './Project';
import Projects from './Projects';



class App extends Component {
  render() {
    return (
<Switch>
    <Route exact path='/' render={() => (<Home />)}/>
    <Route path='/Project/:id' render={(props) => (<Project id={props.match.params.id} />)}/>
    <Route exact path='/Projects' render={() => (<Projects  />)}/>
    <Route render ={()=>(<h1>Not Found</h1> )}/>
</Switch>)
  }
}

export default App;
