import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// import Button from '@material-ui/core/Button'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import CardMedia from '@material-ui/core/CardMedia'
import TextField from '@material-ui/core/TextField'
import CardFooter from 'components/Card/CardFooter'
// import Play from '@material-ui/icons/PlayCircleFilled'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Matches extends React.Component {

  sendBet(index) {
    const local = document.getElementById('local' + index).value
    const visitant = document.getElementById('visitant' + index).value
    const idMatch = index
    const idToS = this.props.idToS
    var params = { local, visitant, idMatch, idToS }
    if(this.props.idDate) params['idDate'] = parseInt(this.props.idDate, 10) - 1

    this.props.setBet(params)
  }

  isZero(number) { return number === undefined ? '' : number }

  render(){
    const { matches, classes } = this.props

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
                    <Grid item xs>
                      {match.state === 'Finished' ? <h3>{this.isZero(match.local.bet)} - {this.isZero(match.visitant.bet)}</h3> :
                        <Paper className={classes.betPaperContainer}>
                          <TextField
                            id={'local' + index}
                            type='number'
                            inputProps={{ min: '0', max: '10', step: '1' }}
                            className={classes.inputField}
                            onChange={ _.debounce(this.sendBet.bind(this, index), 2000) }
                          />
                          <h2> - </h2>
                          <TextField
                            id={'visitant' + index}
                            type='number'
                            inputProps={{ min: '0', max: '10', step: '1' }}
                            className={classes.inputField}
                            onChange={ _.debounce(this.sendBet.bind(this, index), 2000) }
                          />
                        </Paper>}
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
                  {/*match.state === 'Pending' &&
                  <Button className={classes.button} onClick={this.sendBet.bind(this, index)}>
                    <Play className={classes.extendedIcon} />
                  </Button>*/}
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
