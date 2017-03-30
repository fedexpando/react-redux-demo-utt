import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import { Application } from "./modules/main/Application";
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { MuiThemeProvider } from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';
import FirebaseProvider from "./modules/connection/component";

injectTapEventPlugin();

const logger = createLogger({
    // ...options
});

let middlewares = [thunk, logger];
const store = createStore(reducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <FirebaseProvider>
        <Application />
      </FirebaseProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);