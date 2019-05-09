import React from 'react'
import InputGoals from './InputGoals'
import Paper from '@material-ui/core/Paper'

class PendingMatch extends React.Component {

  render(){
    const { classes, match, index, setMatchBet, matches, accessToken, userId, sendBet } = this.props

    return (
      <Paper className={classes.betPaperContainer}>
        <InputGoals
          classes={classes}
          index={index}
          type={'local'}
          match_id={match.id}
          sendBet={sendBet}
          setMatchBet={setMatchBet}
          accessToken={accessToken}
          matches={matches}
          userId={userId} />
        <h2 className={classes.separator}> - </h2>
        <InputGoals
          classes={classes}
          index={index}
          type={'visitant'}
          match_id={match.id}
          sendBet={sendBet}
          accessToken={accessToken}
          setMatchBet={this.props.setMatchBet}
          matches={matches}
          userId={userId} />
      </Paper>
    )
  }
}

export default PendingMatch
