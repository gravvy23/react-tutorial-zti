import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { FunctionalWithState, FunctionalWithStateHook } from  './examples';

function App() {
  return (
    <Router >
      <Navigation />
      <Switch>
        <Route path="/broken-functional-component" component={FunctionalWithState} />
        <Route path="/state-hook" component={FunctionalWithStateHook} />
      </Switch>
    </Router>
  );
}

export default App;
