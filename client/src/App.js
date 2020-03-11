import React, {useState, Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Search}/>
        <Route path="/saved" component={Saved}/>
      </Switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
