import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import appReducers from "./state/reducers";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Database from "./database"

// FIXME find the right way to inject the tools without breaking
// the middleware configuration
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = createStore(appReducers, applyMiddleware(thunkMiddleware));

// TODO put that in a proper action
Database.ref('/stack/').once('value').then(function(snapshot) {
  console.log('From Firebase:', snapshot.val());
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
