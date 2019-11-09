import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';

import store, { saveState } from './store';

class Root extends Component {
  componentDidMount() {
    window.addEventListener('unload', saveState);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
ReactDOM.render(<Root />, document.getElementById('app'));
