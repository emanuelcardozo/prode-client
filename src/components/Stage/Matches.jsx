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

  render(){
    const { matches, classes, idToS, idDate } = this.props

    return(
      <GridContainer>
        {matches.map((match, index) => {
          return (
            <GridItem xs={12} sm={12} md={12} key={index}>
              <Card chart>
                <CardBody>
                  <Grid container spacing={24} direction="row" align="center">
                    <Grid item xs>
                      <Paper xs={3} className={classes.paperContainer}>
                        <CardMedia className={classes.cover} image={match.local.img} />
                        <h4 className={classes.cardTitle}><strong>{match.local.name}</strong></h4>
                      </Paper>
                    </Grid>
                    <Grid item xs style={{ fontSize: '20px', margin: '0px 36px'}}>
                      {match.state === 'Finished' ?
                        <h3>
                          <span style={{ color: this.getColor(match.local.goals, match.local.bet) }}>{this.isZero(match.local.bet)}</span>
                          -
                          <span style={{ color: this.getColor(match.visitant.goals, match.visitant.bet) }}>{this.isZero(match.visitant.bet)}</span>
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
                        <CardMedia className={classes.cover} image={match.visitant.img} />
                        <h4 className={classes.cardTitle}><strong>{match.visitant.name}</strong></h4>
                      </Paper>
                    </Grid>
                  </Grid>
                </CardBody>
                <CardFooter chart>
                  <div>
                    {match.state === 'Pending' ?
                      <div>
                        <span>Fecha: {match.schedule.date} {match.schedule.hour}</span><br/>
                        <span>Predicción: {match.local.name} {this.isZero(match.local.bet)} - {this.isZero(match.visitant.bet)} {match.visitant.name}</span>
                      </div> :
                      <span>Resultado: {match.local.name} {match.local.goals} - {match.visitant.goals} {match.visitant.name}</span>
                    }
                  </div>
                  {match.state !== 'Pending' && <Bets home={match.local} away={match.visitant} idToS={idToS} idMatch={index + 1} />}
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
  idToS: PropTypes.number,
  setBet: PropTypes.func,
  idDate: PropTypes.string
}

export default withStyles(dashboardStyle)(Matches)
