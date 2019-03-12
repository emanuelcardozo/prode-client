import React from 'react'
import Bets from './Bets'
import SDK from 'library/SDK'
import PropTypes from 'prop-types'
import InputGoals from './InputGoals'
import Card from 'components/Card/Card'
import Grid from '@material-ui/core/Grid'
import Star from '@material-ui/icons/Star'
import Paper from '@material-ui/core/Paper'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import CardMedia from '@material-ui/core/CardMedia'
import CardFooter from 'components/Card/CardFooter'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Matches extends React.Component {

  isZero(number) { return number === undefined ? '' : number }

  getColor(goals, bets) { return goals === bets ? 'green' : 'red' }

  starColor(points) {
    switch (points) {
    case 1: return '#e5e4e2'
    case 2: return '#cd7f32'
    case 3: return 'gold'
    default: return 'white'
    }
  }

  sendBet(index) {
    const { userId, match_id, accessToken } = this.props
    const home_goals = document.getElementById('local' + index).value
    const away_goals = document.getElementById('visitant' + index).value
    const params = { home_goals, away_goals, match_id, user_id: userId, index, accessToken }
    this.props.setMatchBet(params)
    SDK.setBet(params)
  }

  render() {
    const { matches, classes, idTournament, idStage,  userId, accessToken } = this.props
    return(
      <GridContainer>
        {matches.map((match, index) => {
          const state = match.state === 'Finished' || match.state === 'Playing'
          const date = match.date || match.hour ? match.date : 'Pendiente'
          return (
            <GridItem xs={12} sm={12} md={12} key={index} id='grid'>
              <Card chart>
                <CardBody style={{ padding: '0.9375rem 0px' }}>
                  <Grid container direction="row" align="center">
                    <Grid item xs={4}>
                      <Paper xs={3} className={classes.paperContainer}>
                        <CardMedia className={classes.cover} image={match.home.logo.large} />
                        <h4 className={classes.cardTitle}><strong>{match.home.name}</strong></h4>
                      </Paper>
                    </Grid>
                    <Grid item xs={4}>
                      {state ?
                        <div>
                          <h3 className={classes.betsGoals} style={{ margin: '0px' }}>
                            <span>{this.isZero(match.home.goals)}</span>-<span>{this.isZero(match.away.goals)}</span>
                          </h3>
                          <Star style={{ color: this.starColor(match.points), width: '30px', height: '30px' }}/>
                          <h5 className={classes.resultGoals}>
                            <span style={{ color: this.getColor(match.home.goals, match.bet_home) }}>{this.isZero(match.bet_home)}</span>
                             -
                            <span style={{ color: this.getColor(match.away.goals, match.bet_away) }}>{this.isZero(match.bet_away)}</span>
                          </h5>
                        </div>:
                        <Paper className={classes.betPaperContainer}>
                          <InputGoals
                            classes={classes}
                            index={index}
                            type={'local'}
                            match_id={match.id}
                            sendBet={this.sendBet}
                            setMatchBet={this.props.setMatchBet}
                            accessToken={accessToken}
                            matches={matches}
                            userId={userId} />
                          <h2 style={{ alignSelf: 'center', margin: '0px' }}> - </h2>
                          <InputGoals
                            classes={classes}
                            index={index}
                            type={'visitant'}
                            match_id={match.id}
                            sendBet={this.sendBet}
                            accessToken={accessToken}
                            setMatchBet={this.props.setMatchBet}
                            matches={matches}
                            userId={userId} />
                        </Paper>
                      }
                    </Grid>
                    <Grid item xs={4}>
                      <Paper className={classes.paperContainer}>
                        <CardMedia className={classes.cover} image={match.away.logo.large} />
                        <h4 className={classes.cardTitle}><strong>{match.away.name}</strong></h4>
                      </Paper>
                    </Grid>
                  </Grid>
                </CardBody>
                <CardFooter chart>
                  <div>
                    {!state ?
                      <div>
                        <span>Fecha: {date} {match.hour}</span>
                      </div> :
                      <Bets home={match.home} away={match.away} idTournament={idTournament} idStage={idStage} idMatch={match.id} accessToken={accessToken} />
                    }
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          )
        })}
      </GridContainer>
    )
  }
}

Matches.propTypes = {
  classes: PropTypes.object,
  matches: PropTypes.array,
  idStage: PropTypes.string,
  idTournament: PropTypes.string,
  match_id: PropTypes.string,
  setBet: PropTypes.func,
  userId: PropTypes.string,
  accessToken: PropTypes.string,
  setMatchBet: PropTypes.func
}

export default withStyles(dashboardStyle)(Matches)
