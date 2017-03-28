import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import {BasicRouter} from "./modules/todo/components";
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";
import {MuiThemeProvider} from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();



const logger = createLogger({
  // ...options
});
let middlewares = [thunk, logger];
const store = createStore(reducer,applyMiddleware(logger));

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BasicRouter />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
