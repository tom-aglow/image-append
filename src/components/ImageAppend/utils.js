/* eslint-disable import/prefer-default-export */
export function changeCounter(inc) {
  return function setNewState(prevState) {
    const modInc = prevState.index + inc >= 1 ? inc : 0
    return {
      index: prevState.index + modInc,
    }
  }
}
