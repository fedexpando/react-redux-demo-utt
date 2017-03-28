import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import {BasicRouter} from "./modules/todo/components";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";
import {MuiThemeProvider} from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BasicRouter />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
