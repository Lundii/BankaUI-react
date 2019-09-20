import React from 'react';
import ReactDom from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import App from './App';

const middlewares = applyMiddleware(thunk)
const store = createStore(rootReducer, 
  compose(
    middlewares,
    composeWithDevTools())
  );

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
