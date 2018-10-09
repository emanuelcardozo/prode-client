//------------ USER ------------
export const setUser = user => { return { type: 'SET_USER', user } }

//----------- LEAGUES --------------
export const setTournaments = tournaments => { return { type: 'SET_TOURNAMENTS', tournaments } }

//----------- BETS --------------
export const setBet           = bet  => { return { type: 'SET_BET',            bet } }
export const setTournamentBet = bet  => { return { type: 'SET_TOURNAMENT_BET', bet } }
export const setStageBet      = bet  => { return { type: 'SET_STAGE_BET',      bet } }
export const setBetOnMatch    = bet  => { return { type: 'SET_BET_ON_MATCH',   bet } }
