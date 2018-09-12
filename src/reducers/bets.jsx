const bets = (state = [], action) => {
  var type
  var object = {}

  switch (action.type) {
  case 'SET_BET': {
    type = action.bets.type
    object[type] = [...state[type], action.bets[type]]
    return ({ ...state, ...object })
  }

  default:
    return state
  }
}

export default bets
