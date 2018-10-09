const tournaments = (state = [], action) => {
  switch (action.type) {
  case 'SET_TOURNAMENTS':
    return action.tournaments
  default:
    return state
  }
}

export default tournaments
