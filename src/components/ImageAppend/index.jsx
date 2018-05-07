// @flow
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'

import { changeCounter } from './utils'
import Counter from './Counter'
import ControlButton from './ControlButton'
import ImageHolder from './ImageHolder'

type State = {
  index: number,
}

class ImageAppend extends Component<null, State> {
  state = {
    index: 1,
  }

  onButtonClickHandler = (inc: number) => {
    this.setState(changeCounter(inc))
  }

  render() {
    const { index } = this.state
    return (
      <div>
        <ImageHolder num={index} />
        <Counter index={index} />
        <ControlButton
          increment={-1}
          onButtonClick={this.onButtonClickHandler}
          text="-"
        />
        <ControlButton
          increment={1}
          onButtonClick={this.onButtonClickHandler}
          text="+"
        />
      </div>
    )
  }
}

export default ImageAppend
