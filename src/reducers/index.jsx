import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import bets from './bets'
import user from './user'
import match from './match'
import message from './message'
import tournaments from './tournaments'

const rootReducer = combineReducers({
  bets,
  user,
  match,
  message,
  tournaments,
  routing: routerReducer
})

export default rootReducer
