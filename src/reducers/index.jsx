import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import bets from './bets'
import user from './user'
import leagues from './leagues'

const rootReducer = combineReducers({
  bets,
  user,
  leagues,
  routing: routerReducer
})

export default rootReducer
