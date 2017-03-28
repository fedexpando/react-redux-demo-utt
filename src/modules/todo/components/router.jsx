import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Todo } from './pure/todo'

export const BasicRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Todo} />
      <Route path="/about" component={() => <div>Puto el que lee</div>} />
    </div>
  </Router>
)
