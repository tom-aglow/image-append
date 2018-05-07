// @flow
/* eslint-disable import/prefer-default-export */
export function changeCounter(inc: number) {
  return function setNewState(prevState: { index: number }) {
    const modInc = prevState.index + inc >= 1 ? inc : 0
    return {
      index: prevState.index + modInc,
    }
  }
}
