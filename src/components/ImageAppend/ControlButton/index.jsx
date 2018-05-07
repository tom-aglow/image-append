// @flow
import React, { Component } from 'react'

type Props = {
  increment: number,
  text: string,
  onButtonClick: (x: number) => void,
}

class ControlButton extends Component<Props> {
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
