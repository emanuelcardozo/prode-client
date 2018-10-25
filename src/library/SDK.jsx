import user from './sdk/user'
import bets from './sdk/bets'
import stages from './sdk/stages'
import tournaments from './sdk/tournaments'

const SDK = {
  ...user,
  ...bets,
  ...stages,
  ...tournaments
}

export default SDK
