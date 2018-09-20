import React from 'react'
import PropTypes from 'prop-types'
import logo from 'assets/img/balon.png'
import Card from 'components/Card/Card'
import CardIcon from 'components/Card/CardIcon'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import CardHeader from 'components/Card/CardHeader'
import CardFooter from 'components/Card/CardFooter'
import Chevron from '@material-ui/icons/ChevronRight'
import Account from '@material-ui/icons/AccountCircle'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Timba extends React.Component {

  viewTournament(type, id) { this.props.history.push('/' + type + '/' + id) }

  componentDidMount() {
    const { tournaments, matches } = this.props.bets

    if(tournaments.length === 0 && matches.length === 0) this.props.history.push('/fechas')
  }

  render() {
    const { classes, bets } = this.props
    const tournamentsBet = bets.tournaments
    const stagesBet = bets.matches

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
                    <span></span>
                    <Chevron className={classes.icon} style={{ cursor: 'pointer' }} onClick={this.viewTournament.bind(this, 'torneo', tournament.id)}/>
                  </CardFooter>
                </Card>
              </GridItem>
            )
          })}
        </GridContainer>
        {/* ----LISTA DE FECHAS A LAS QUE SE APUESTAN---- */}
        <GridContainer>
          {stagesBet.map((stage, index) => {
            if(!stage) return null
            return (
              <GridItem xs={12} sm={12} md={4} key={index}>
                <Card>
                  <CardHeader stats icon>
                    <CardIcon color='warning' style={{ width: '7%' }}>
                      <img src={logo} alt='..'style={{ width: '100%' }} />
                    </CardIcon>
                    <h3 className={classes.cardTitle}>Fecha: {stage.number}</h3>
                    <p className={classes.cardTitle}>{stage.league}</p>
                  </CardHeader>
                  <CardBody>
                    <p className={classes.cardTitle}>Fecha de Inicio: {stage.begin}</p>
                    <p className={classes.cardTitle}>Fecha de cierre: {stage.end}</p>
                  </CardBody>
                  <CardFooter stats>
                    <div className={classes.stats}>
                      <p className={classes.cardCategory}>
                        <span className={classes.successText}>
                          <Account className={classes.icon} />
                        </span> Usuarios en la fecha: {stage.amount}
                      </p>
                    </div>
                    <Chevron className={classes.icon} style={{ cursor: 'pointer' }} onClick={this.viewTournament.bind(this, 'fecha', stage.id)}/>
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
