//------------ USER ------------
export const setUser = user => { return { type: 'SET_USER', user } }
export const setAlias = user => { return { type: 'SET_ALIAS', user } }

//------- TOURNAMENTS ----------
export const setTournaments = tournaments => { return { type: 'SET_TOURNAMENTS', tournaments } }

//----------- BETS -------------
export const setBet = bet  => { return { type: 'SET_BET', bet } }
export const setStage = matches => { return { type: 'SET_STAGE', matches } }
export const setMatchBet = bet  => { return { type: 'SET_MATCH_BET', bet } }

export const setBetOnMatch = bet  => { return { type: 'SET_BET_ON_MATCH', bet } }

export const setMatch = match => { return { type: 'SET_MATCH', match } }

export const setMessage = msg => { return { type: 'SET_MSG', msg } }
