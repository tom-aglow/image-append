import React, { Component } from 'react'

class ControlButton extends Component {
  onClickHandler = () => {
    const { increment, onButtonClick } = this.props
    onButtonClick(increment)
  }

  render() {
    const { text } = this.props
    return <button onClick={this.onClickHandler}>{text}</button>
  }
}

export default ControlButton
