import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import GridItem from 'components/Grid/GridItem'
import GridContainer from 'components/Grid/GridContainer'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody'
import CardFooter from 'components/Card/CardFooter'
import CardIcon from 'components/Card/CardIcon'
import Account from '@material-ui/icons/AccountCircle'
import Chevron from '@material-ui/icons/ChevronRight'
import { tournamentsBet, matchesBet } from 'variables/charts'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Timba extends React.Component {

  viewTournament(id) {
    console.log('tu puta bolo', id)
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <GridContainer>
          {tournamentsBet.map((timba, index) => {
            return (
              <GridItem xs={12} sm={12} md={4} key={index}>
                <Card chart>
                  <CardHeader color='success'>
                    <img src={timba.img} alt='...' style={{ width: '100%' }}/>
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>{timba.name}</h4>
                    <p className={classes.cardCategory}>
                      <span className={classes.successText}>
                        <Account className={classes.icon} />
                      </span> Usuarios en el torneo: {timba.amount}
                    </p>
                    <p>Fecha: {timba.dateMatch}</p>
                    <p>Posición: {timba.position}</p>
                  </CardBody>
                  <CardFooter chart>
                    <Chevron className={classes.icon}  onClick={this.viewTournament.bind(null, timba.id)}/>
                  </CardFooter>
                </Card>
              </GridItem>
            )
          })}

          {matchesBet.map((match, index) => {
            return (
              <GridItem xs={12} sm={12} md={4} key={index}>
                <Card chart>
                  <CardBody>
                    <div className={classes.matchContainer}>
                      <div>
                        <CardIcon>
                          <img src={match.imgHome} alt='...' style={{ width: '50px' }}/>
                          <h4 className={classes.cardTitle}>{match.homeTeam}</h4>
                        </CardIcon>
                      </div>
                      <div className={classes.resultContainer}>
                        <p className={classes.result}>{match.homeBet + ' - ' + match.awayBet}</p>
                      </div>
                      <div>
                        <CardIcon>
                          <img src={match.imgAway} alt='...' style={{ width: '50px' }}/>
                          <h4 className={classes.cardTitle}>{match.awayTeam}</h4>
                        </CardIcon>
                      </div>
                    </div>
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
  classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Timba)
