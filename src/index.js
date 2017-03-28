import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import { BasicRouter } from "./modules/todo/components";
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { MuiThemeProvider } from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';
import {subscribe} from "./modules/common/connection";
import todo from "./modules/todo";

injectTapEventPlugin();

const init = initialTodos => {
  const logger = createLogger({
    // ...options
  });
  let middlewares = [thunk, logger];
  const initialState = {
    todos : todo.initialState
  };
  initialState.todos.todos = initialTodos;
  const store = createStore(reducer, initialState, applyMiddleware(...middlewares));

  ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <BasicRouter />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
  );

  return store.dispatch;
}
const addOne = one => dispatch => dispatch(todo.actions.addTodo(one));
subscribe(init)(addOne);