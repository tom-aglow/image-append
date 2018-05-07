import React, { Component } from 'react';
import { Consumer } from '..';

class ControlButton extends Component {
  foo = cb => () => {
    cb(this.props.increment);
  };

  render() {
    return (
      <Consumer>
        {({ onButtonClick }) => (
          <button onClick={this.foo(onButtonClick)}>
            {this.props.children}
          </button>
        )}
      </Consumer>
    );
  }
}

export default ControlButton;
