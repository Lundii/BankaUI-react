import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <div>
        Welcome to Bankad
      </div>
    )
  }
}

ReactDom.render(
    <App />,
  document.getElementById('root')
)
