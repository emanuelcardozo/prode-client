import React from 'react'
import SDK from 'library/SDK'
import TeamMatch from './TeamMatch'
import FinishMatch from './FinishMatch'
import PendingMatch from './PendingMatch'
import CardBody from 'components/Card/CardBody'

class BodyMatch extends React.Component {

  sendBet(index) {
    const { userId, match_id, accessToken } = this.props
    const home_goals = document.getElementById('local' + index).value
    const away_goals = document.getElementById('visitant' + index).value
    const params = { home_goals, away_goals, match_id, user_id: userId, index, accessToken }
    this.props.setMatchBet(params)
    SDK.setBet(params)
  }
  render(){
    const { classes, match, state } = this.props

    return(
      <CardBody style={{'padding': '0.9375rem 10px'}}>
        <div className="container" style={{'textAlign': 'center'}}>
          <div className="row">
            <TeamMatch classes={classes} team={match.home} />
            <div className="col-6" style={{'alignSelf': 'center'}}>
            {state ? <FinishMatch classes={classes} match={match} /> : <PendingMatch sendBet={this.sendBet} {...this.props} /> }
            </div>
            <TeamMatch classes={classes} team={match.away} />
          </div>
        </div>
      </CardBody>
    )
  }
}

export default BodyMatch
