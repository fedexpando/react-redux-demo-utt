import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { TodoApplication } from './TodoApplication'

export const ApplicationRouter = () => (
  <Router>
    <div style={{height:"100%",width:"100%"}}>
      <Route exact path="/" component={TodoApplication} />
      <Route path="/about" component={() => <h1>OTRO COMPONENTE PARA OTRA RUTA</h1>} />
    </div>
  </Router>
)
