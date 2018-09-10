const leagues = (state = [], action) => {
  switch (action.type) {
  case 'SET_LEAGUES':
    return action.leagues
  default:
    return state
  }
}

export default leagues
