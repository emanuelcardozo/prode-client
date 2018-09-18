//------------ USER ------------
export const setUser = user => { return { type: 'SET_USER', user } }

//----------- LEAGUES --------------
export const setLeagues = leagues => { return { type: 'SET_LEAGUES', leagues } }

//----------- BETS --------------
export const setBet           = bets => { return { type: 'SET_BET', bets } }
export const setTournamentBet = bet  => { return { type: 'SET_TOURNAMENT_BET', bet } }
