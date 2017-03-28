import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { TodoList } from './todoList'

export const BasicRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={TodoList} />
      <Route path="/about" component={() => <div>Puto el que lee</div>} />
    </div>
  </Router>
)
