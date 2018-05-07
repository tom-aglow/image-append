/* eslint-disable react/no-unused-state, react/sort-comp */
import React, { Component } from 'react'

import Counter from './Counter'
import ControlButton from './ControlButton'

const initialState = { index: 1, onButtonClick: () => {} }
const { Provider, Consumer } = React.createContext(initialState)

class ImageAppend extends Component {
  onButtonClickHandler = inc => {
    this.setState(prevState => ({ index: prevState.index + inc }))
  }

  state = {
    ...initialState,
    onButtonClick: this.onButtonClickHandler,
  }

  render() {
    return (
      <div>
        <Provider value={this.state}>
          <Counter />
          <ControlButton increment={-1}>-</ControlButton>
          <ControlButton increment={1}>+</ControlButton>
        </Provider>
      </div>
    )
  }
}

export default ImageAppend
export { Consumer }
