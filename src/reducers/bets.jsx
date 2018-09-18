const bets = (state = [], action) => {
  var object = {}

  switch (action.type) {
  case 'SET_BET': {
    const { type, tournaments } = action.bets
    object[type] = [...state[type]]
    object[type][tournaments.id] = {...tournaments}

    return ({ ...state, ...object })
  }

  case 'SET_TOURNAMENT_BET': {
    const { local, visitant, idDate, idTournament, idMatch } = action.bet
    object = { ...state }
    object.tournaments[idTournament].dateMatches[idDate].matches[idMatch].local.bet = local
    object.tournaments[idTournament].dateMatches[idDate].matches[idMatch].visitant.bet = visitant

    return ({ ...object })
  }

  default:
    return state
  }
}

export default bets
