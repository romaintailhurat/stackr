import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './state/reducers';
import { fetchStack } from './actions/actions';

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = createStore(
  appReducers,
  applyMiddleware(thunkMiddleware)
);

//store.dispatch(fetchStack()).then(() => { console.log('remote data fetched!') });

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
