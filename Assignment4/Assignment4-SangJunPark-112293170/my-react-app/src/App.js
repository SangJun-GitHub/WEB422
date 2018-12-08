/*********************************************************************************
*  WEB422 – Assignment 04
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: Sang Jun Park     Student ID: 112293170     Date: 2018-11-01
*
********************************************************************************/ 

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Overview from './Overview.js';
import Projects from './Projects.js';
import Teams from './Teams.js';
import Employees from './Employees.js';
import NotFound from './NotFound.js';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview title = "Overview"/>
        )} />
        <Route exact path='/projects' render={() => (
          <Projects title = "Projects"/>
        )} />
        <Route exact path='/teams' render={() => (
          <Teams title = "Teams"/>
        )} />
        <Route exact path='/employees' render={() => (
          <Employees title = "Employees"/>
        )} />
        <Route render={() => (
          <NotFound />
        )} />
      </Switch>
    );
  }
}

export default App;