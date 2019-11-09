import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/form';
import style from './main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.main}>
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);
