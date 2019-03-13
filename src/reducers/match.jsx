const match = (state = [], action) => {
  switch (action.type) {
  case 'SET_MATCH':
    return action.match

  default:
    return state
  }
}

export default match
