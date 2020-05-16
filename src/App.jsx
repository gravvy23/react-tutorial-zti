import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { FunctionalWithState } from  './examples';

function App() {
  return (
    <Router >
      <Navigation />
      <Switch>
        <Route path="/broken-functional-component">
          <FunctionalWithState />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
