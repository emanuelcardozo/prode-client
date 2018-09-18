import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import GridItem from 'components/Grid/GridItem'
import GridContainer from 'components/Grid/GridContainer'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody'
import CardFooter from 'components/Card/CardFooter'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardMedia from '@material-ui/core/CardMedia'

import Account from '@material-ui/icons/AccountCircle'
import Chevron from '@material-ui/icons/ChevronRight'
import { matchesBet } from 'variables/charts'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Timba extends React.Component {

  viewTournament(id) {
    this.props.history.push('/torneo/' + id)
  }

  render() {
    const { classes, bets } = this.props
    const tournamentsBet = bets.tournaments

    return (
      <div>
        {/* ----LISTA DE TORNEOS A LOS QUE JUEGA CADA USUARIO---- */}
        <GridContainer>
          {tournamentsBet.map((tournament, index) => {
            if(!tournament) return null
            return (
              <GridItem xs={12} sm={12} md={4} key={index}>
                <Card chart>
                  <CardHeader color='success'>
                    <img src={tournament.img} alt='...' style={{ width: '100%' }}/>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>{tournament.name}</h4>
                    <p className={classes.cardCategory}>
                      <span className={classes.successText}>
                        <Account className={classes.icon} />
                      </span> Usuarios en el torneo: {tournament.amount}
                    </p>
                    <p>Fecha: {tournament.dateMatch}</p>
                    <p>Posición: {tournament.position}</p>
                  </CardBody>
                  <CardFooter chart>
                    <Chevron className={classes.icon}  onClick={this.viewTournament.bind(this, tournament.id)}/>
                  </CardFooter>
                </Card>
              </GridItem>
            )
          })}
        </GridContainer>

        {/* ----LISTA DE PARTIDOS INDIVIDUALES A LOS QUE SE APUESTAN---- */}
        <GridContainer>
          {matchesBet.map((match, index) => {
            return (
              <GridItem xs={12} sm={12} md={4} key={index}>
                <Card chart>
                  <CardBody>
                    <Grid container spacing={24} direction="row" align="center">
                      <Grid item xs>
                        <Paper xs={3} className={classes.paperContainer}>
                          <CardMedia className={classes.cover} image={match.imgHome} />
                          <h4 className={classes.cardTitle}>{match.homeTeam}</h4>
                        </Paper>
                      </Grid>
                      <Grid item xs>
                        <Paper className={classes.paperContainer}>
                          <h2>{match.homeBet + ' - ' + match.awayBet}</h2>
                        </Paper>
                      </Grid>
                      <Grid item xs>
                        <Paper className={classes.paperContainer}>
                          <CardMedia className={classes.cover} image={match.imgAway} />
                          <h4 className={classes.cardTitle}>{match.awayTeam}</h4>
                        </Paper>
                      </Grid>
                    </Grid>
                  </CardBody>
                  <CardFooter chart>
                    <p>Fecha del Partido: {match.dateMatch}</p>
                  </CardFooter>
                </Card>
              </GridItem>
            )
          })}
        </GridContainer>
      </div>
    )
  }
}

Timba.propTypes = {
  classes: PropTypes.object.isRequired,
  bets: PropTypes.object,
  history: PropTypes.object,
}

export default withStyles(dashboardStyle)(Timba)
