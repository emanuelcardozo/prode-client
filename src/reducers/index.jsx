import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'
import leagues from './leagues'

const rootReducer = combineReducers({
  user,
  leagues,
  routing: routerReducer
})

export default rootReducer
