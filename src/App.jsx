import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/hello-world';
import Form from './components/form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HelloWorld title="Hello from React webpack" />
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);
