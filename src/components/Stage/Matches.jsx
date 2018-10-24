import React from 'react'
import Bets from './Bets'
import SDK from 'library/SDK'
import PropTypes from 'prop-types'
import InputGoals from './InputGoals'
import Card from 'components/Card/Card'
import Grid from '@material-ui/core/Grid'
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

  sendBet(index) {
    const { userId, match_id } = this.props
    const home_goals = document.getElementById('local' + index).value
    const away_goals = document.getElementById('visitant' + index).value
    const params = { home_goals, away_goals, match_id, user_id: userId, index }
    this.props.setMatchBet(params)
    SDK.setBet(params)
  }

  render() {
    const { matches, classes, idTournament, idStage,  userId } = this.props

    return(
      <GridContainer>
        {matches.map((match, index) => {
          const state = match.state === 'Finished' || match.state === 'Playing'
          const date = match.date || match.hour ? match.date : 'Pendiente'
          return (
            <GridItem xs={12} sm={12} md={12} key={index}>
              <Card chart>
                <CardBody>
                  <Grid container spacing={24} direction="row" align="center">
                    <Grid item xs>
                      <Paper xs={3} className={classes.paperContainer}>
                        <CardMedia className={classes.cover} image={match.home.logo.large} />
                        <h4 className={classes.cardTitle}><strong>{match.home.name}</strong></h4>
                      </Paper>
                    </Grid>
                    <Grid item xs style={{ fontSize: '20px' }}>
                      {state ?
                        <h3 className={classes.betsGoals}>
                          <span style={{ color: this.getColor(match.home.goals, match.bet_home) }}>{this.isZero(match.bet_home)}</span>
                          -
                          <span style={{ color: this.getColor(match.away.goals, match.bet_away) }}>{this.isZero(match.bet_away)}</span>
                        </h3> :
                        <Paper className={classes.betPaperContainer}>
                          <InputGoals
                            classes={classes}
                            index={index}
                            type={'local'}
                            match_id={match.id}
                            sendBet={this.sendBet}
                            setMatchBet={this.props.setMatchBet}
                            matches={matches}
                            userId={userId} />
                          <h2 style={{ alignSelf: 'center' }}> - </h2>
                          <InputGoals
                            classes={classes}
                            index={index}
                            type={'visitant'}
                            match_id={match.id}
                            sendBet={this.sendBet}
                            setMatchBet={this.props.setMatchBet}
                            matches={matches}
                            userId={userId} />
                        </Paper>
                      }
                    </Grid>
                    <Grid item xs>
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
                        <span>Fecha: {date} {match.hour} </span><br/>
                        <span><strong>Predicción: {match.home.name} {this.isZero(match.bet_home)} - {this.isZero(match.bet_away)} {match.away.name}</strong></span>
                      </div> :
                      <span>Resultado: {match.home.name} {match.home.goals} - {match.away.goals} {match.away.name}</span>
                    }
                  </div>
                  {state && <Bets home={match.home} away={match.away} idTournament={idTournament} idStage={idStage} idMatch={match.id} />}
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
  setMatchBet: PropTypes.func
}

export default withStyles(dashboardStyle)(Matches)
