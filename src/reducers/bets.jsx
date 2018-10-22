const bets = (state = [], action) => {
  var object = {}

  switch (action.type) {
  case 'SET_BET': {
    const { obj, type } = action.bet
    object[type] = [ ...state[type] ]
    object[type][obj.id] = { ...obj }

    return ({ ...state, ...object })
  }

  case 'SET_MATCH_BET': {
    const { home_goals, away_goals, index } = action.bet
    object = { ...state }
    object.stage[index].home.bet = home_goals
    object.stage[index].away.bet = away_goals

    return ({ ...object })
  }

  case 'SET_BET_ON_MATCH': {
    return ({ ...state, match: action.bet})
  }

  case 'SET_STAGE': {
    const { matches } = action.matches
    return ({ ...state, stage: matches })
  }

  default:
    return state
  }
}

export default bets
