import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import appReducers from "./state/reducers";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// FIXME find the right way to inject the tools without breaking
// the middleware configuration
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = createStore(appReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
