/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'

import { changeCounter } from './utils'
import Counter from './Counter'
import ControlButton from './ControlButton'
import ImageHolder from './ImageHolder'

class ImageAppend extends Component {
  state = {
    index: 1,
  }

  onButtonClickHandler = inc => {
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
