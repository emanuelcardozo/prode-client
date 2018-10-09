import React from 'react'
import Bets from './Bets'
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

  render() {
    const { matches, classes, idToS, idDate } = this.props

    return(
      <GridContainer>
        {matches.map((match, index) => {
          const state = match.state === 'Finished'
          return (
            <GridItem xs={12} sm={12} md={12} key={index}>
              <Card chart>
                <CardBody>
                  <Grid container spacing={24} direction="row" align="center">
                    <Grid item xs>
                      <Paper xs={3} className={classes.paperContainer}>
                        <CardMedia className={classes.cover} image={match.home.logo} />
                        <h4 className={classes.cardTitle}><strong>{match.home.name}</strong></h4>
                      </Paper>
                    </Grid>
                    <Grid item xs style={{ fontSize: '20px', margin: '0px 36px'}}>
                      { state ?
                        <h3>
                          <span style={{ color: this.getColor(match.home.goals, match.home.bet) }}>{this.isZero(match.home.bet)}</span>
                          -
                          <span style={{ color: this.getColor(match.away.goals, match.away.bet) }}>{this.isZero(match.away.bet)}</span>
                        </h3> :
                        <Paper className={classes.betPaperContainer}>
                          <InputGoals
                            classes={classes}
                            idToS={idToS}
                            index={index}
                            type={'local'}
                            setBet={this.props.setBet}
                            idDate={idDate} />
                          <h2 style={{ alignSelf: 'center' }}> - </h2>
                          <InputGoals
                            classes={classes}
                            idToS={idToS}
                            index={index}
                            type={'visitant'}
                            setBet={this.props.setBet}
                            idDate={idDate} />
                        </Paper>
                      }
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.paperContainer}>
                        <CardMedia className={classes.cover} image={match.away.logo} />
                        <h4 className={classes.cardTitle}><strong>{match.away.name}</strong></h4>
                      </Paper>
                    </Grid>
                  </Grid>
                </CardBody>
                <CardFooter chart>
                  <div>
                    { !state ?
                      <div>
                        <span>Fecha: {match.date}</span><br/>
                        <span>Predicción: {match.home.name} {this.isZero(match.home.bet)} - {this.isZero(match.away.bet)} {match.away.name}</span>
                      </div> :
                      <span>Resultado: {match.home.name} {match.home.goals} - {match.away.goals} {match.away.name}</span>
                    }
                  </div>
                  { state && <Bets home={match.home} away={match.away} idToS={idToS} idMatch={index + 1} />}
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
  dateMatch: PropTypes.object,
  matches: PropTypes.array,
  idToS: PropTypes.string,
  setBet: PropTypes.func,
  idDate: PropTypes.string
}

export default withStyles(dashboardStyle)(Matches)
