const bets = (state = [], action) => {
  var object = {}

  switch (action.type) {
  case 'SET_BET': {
    const { type, obj } = action.bet
    object[type] = [...state[type]]
    object[type][obj.id] = {...obj}

    return ({ ...state, ...object })
  }

  case 'SET_TOURNAMENT_BET': {
    const { local, visitant, idDate, idToS, idMatch } = action.bet
    object = { ...state }
    object.tournaments[idToS].dateMatches[idDate].matches[idMatch].local.bet = local
    object.tournaments[idToS].dateMatches[idDate].matches[idMatch].visitant.bet = visitant

    return ({ ...object })
  }

  case 'SET_STAGE_BET': {
    const { local, visitant, idMatch, idToS } = action.bet
    object = { ...state }
    object.matches[idToS].matches[idMatch].local.bet = local
    object.matches[idToS].matches[idMatch].visitant.bet = visitant

    return ({ ...object })
  }

  case 'SET_BET_ON_MATCH': {
    return ({ ...state, match: action.bet})
  }

  default:
    return state
  }
}

export default bets
