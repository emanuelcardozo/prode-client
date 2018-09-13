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
    var local = document.getElementById('local' + id).value
    var visitant = document.getElementById('visitant' + id).value
    console.log(this.props.match.matches[id], local, visitant)
  }

  render(){
    const { match, classes } = this.props

    return(
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          {match.matches.map((m, index) => {
            return(
              <Card key={index}>
                <CardBody >
                  <Grid container spacing={24} direction="row" align="center">
                    <Grid item xs>
                      <Paper className={classes.paperContainer}><h3><strong>{m.local.name}</strong></h3></Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.betPaperContainer}>
                        <TextField id={'local' + index} type='number' inputProps={{ min: '0', max: '10', step: '1' }} className={classes.inputField} />
                        <h2> - </h2>
                        <TextField id={'visitant' + index} type='number' inputProps={{ min: '0', max: '10', step: '1' }} className={classes.inputField} />
                      </Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.paperContainer}><h3><strong>{m.visitant.name}</strong></h3></Paper></Grid>
                  </Grid>
                </CardBody>
                <CardFooter chart>
                  <p>Fecha: {m.schedule.date} {m.schedule.hour} - Resultado: {m.state === 'Finished' ? (m.local.name + ' ' + m.local.goals + ' - ' + m.visitant.goals + ' ' + m.visitant.name) : 'Pendiente'}</p>
                  {m.state === 'Pending' &&
                  <Button variant="extendedFab" aria-label="Delete" className={classes.button} onClick={this.sendMatchBet.bind(this, index)}>
                    Jugar
                    <Play className={classes.extendedIcon} />
                  </Button>}
                </CardFooter>
              </Card>
            )
          })}
        </Card>
      </GridItem>
    )
  }
}

Match.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object
}

export default withStyles(dashboardStyle)(Match)
