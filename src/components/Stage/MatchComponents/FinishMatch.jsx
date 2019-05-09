import React from 'react'

class FinishMatch extends React.Component {

  isZero(number) { return number === undefined ? '' : number }

  backgroundColor(points) {
    switch (points) {
    case 1: return '#d6d627'
    case 2: return '#219e21'
    case 3: return 'linear-gradient(45deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%)'
    default: return '#ef2b2b'
    }
  }

  render(){
    const { classes, match } = this.props

    return (
      <div className={classes.supDiv}>
        <div className={classes.betsGoals}>
          <h3 className={classes.newH3}>{this.isZero(match.home.goals)}</h3>
          <div className={classes.containerBet} style={{ background: this.backgroundColor(match.points) }}>
            <span style={{padding: '0px'}}>{this.isZero(match.bet_home)}</span>
            <span style={{padding: '0px'}}>{this.isZero(match.bet_away)}</span>
          </div>
          <h3 className={classes.newH3}>{this.isZero(match.away.goals)}</h3>
        </div>
      </div>
    )
  }
}

export default FinishMatch
