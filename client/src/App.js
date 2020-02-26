import React, {useState, Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Search from './components/pages/search';
// import saved from './components/pages/saved';

function App() {
  return (
    <>
    <Search/>
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" Component={Search}/>
        {/* <Route exact path="/saved" Component={saved}/> */}
      </Switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
