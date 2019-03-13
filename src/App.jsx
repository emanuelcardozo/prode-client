import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from 'actions/index'
import Main from './layouts/Inicio/Main'

const mapStateToProps = state => {
  return {
    user: state.user,
    tournaments: state.tournaments,
    bets: state.bets,
    match: state.match
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}

const App = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Main)
)

export default App
