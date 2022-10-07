import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* import logo from './trivia.png'; */
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/settings" component={ Settings } />
    </Switch>
  );
}
