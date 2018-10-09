import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import bets from './bets'
import user from './user'
import tournaments from './tournaments'

const rootReducer = combineReducers({
  bets,
  user,
  tournaments,
  routing: routerReducer
})

export default rootReducer
