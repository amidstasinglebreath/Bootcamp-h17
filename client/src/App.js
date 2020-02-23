import React, {useState, Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import search from './components/pages/search';
import saved from './components/pages/saved';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" Component={search}/>
        <Route exact path="/saved" Component={saved}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
