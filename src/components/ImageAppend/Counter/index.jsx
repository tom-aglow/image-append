import React, { Component } from 'react';
import { Consumer } from '..';

class Counter extends Component {
  render() {
    return (
      <div>
        <Consumer>{({ index }) => index}</Consumer>
      </div>
    );
  }
}

export default Counter;
