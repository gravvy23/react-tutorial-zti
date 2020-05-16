import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { FunctionalWithState, FunctionalWithStateHook, SetCountCallback, FunctionalWithEffect } from  './examples';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <Router >
      <Navigation />
      <Switch>
        <Route path="/broken-functional-component" component={FunctionalWithState} />
        <Route path="/state-hook" component={FunctionalWithStateHook} />
        <Route path="/setcount-callback" component={SetCountCallback} />
        <Route path="/use-effect" component={FunctionalWithEffect} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
