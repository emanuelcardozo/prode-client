import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import CardFooter from 'components/Card/CardFooter'
import Button from '@material-ui/core/Button'
import Play from '@material-ui/icons/PlayCircleFilled'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Match extends React.Component {

  sendMatchBet(id) {
    const local = document.getElementById('local' + id).value
    const visitant = document.getElementById('visitant' + id).value
    const idDate = parseInt(this.props.dateMatch.name, 10) - 1
    const idTournament = this.props.idTournament

    this.props.setTournamentBet({local, visitant, idDate, idTournament, idMatch: id})
  }

  isZero(number) {
    return number === undefined ? '' : number
  }

  render(){
    const { dateMatch, classes } = this.props

    return(
      <GridItem xs={12} sm={12} md={12}>
        {dateMatch.matches.map((m, index) => {
          return(
            <Card key={index}>
              <CardBody >
                <Grid container spacing={16} direction="row" align="center">
                  <Grid item xs>
                    <Paper className={classes.paperContainer}><h3><strong>{m.local.name}</strong></h3></Paper>
                  </Grid>
                  <Grid item xs>
                    {m.state === 'Finished' ? <h3>{this.isZero(m.local.bet)} - {this.isZero(m.visitant.bet)}</h3> :
                      <Paper className={classes.betPaperContainer}>
                        <TextField id={'local' + index} type='number' inputProps={{ min: '0', max: '10', step: '1' }} className={classes.inputField} />
                        <h2> - </h2>
                        <TextField id={'visitant' + index} type='number' inputProps={{ min: '0', max: '10', step: '1' }} className={classes.inputField} />
                      </Paper>}
                  </Grid>
                  <Grid item xs>
                    <Paper className={classes.paperContainer}><h3><strong>{m.visitant.name}</strong></h3></Paper></Grid>
                </Grid>
              </CardBody>
              <CardFooter chart>
                <p>Fecha: {m.schedule.date} {m.schedule.hour} - Resultado:  {m.local.name} {this.isZero(m.local.goals)} - {this.isZero(m.visitant.goals)} {m.visitant.name}</p>
                {m.state === 'Pending' && <p>Apuesta: {m.local.name} {this.isZero(m.local.bet)} - {this.isZero(m.visitant.bet)} {m.visitant.name}</p>}
                {m.state === 'Pending' &&
                <Button variant="extendedFab" aria-label="Delete" className={classes.button} onClick={this.sendMatchBet.bind(this, index)}>
                  Jugar
                  <Play className={classes.extendedIcon} />
                </Button>}
              </CardFooter>
            </Card>
          )
        })}
      </GridItem>
    )
  }
}

Match.propTypes = {
  classes: PropTypes.object,
  dateMatch: PropTypes.object,
  idTournament: PropTypes.number,
  setTournamentBet: PropTypes.func
}

export default withStyles(dashboardStyle)(Match)
