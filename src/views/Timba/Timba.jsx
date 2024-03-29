import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import CardHeader from 'components/Card/CardHeader'
import CardFooter from 'components/Card/CardFooter'
import Chevron from '@material-ui/icons/ChevronRight'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Timba extends React.Component {

  viewTournament(type, id, stage) { this.props.history.push('/' + type + '/' + id + '/' + stage) }

  componentDidMount() {
    const { tournaments } = this.props.bets
    if(Object.values(tournaments).length === 0) this.props.history.push('/torneos')
  }

  render() {
    const { classes, bets } = this.props
    const tournamentsBet = Object.values(bets.tournaments)

    return (
      <div>
        <div className={classes.container}>
          <GridContainer>
            {tournamentsBet.map((tournament, index) => {
              const stage = tournament.current_stage.split(' ', tournament.current_stage.length)[1]
              return (
                <GridItem xs={12} sm={12} md={4} key={index}>
                  <Card chart>
                    <CardHeader color='success'>
                      <img src={tournament.img} alt='...' style={{ width: '100%' }}/>
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>{tournament.name}</h4>
                      <p>{tournament.current_stage}</p>
                    </CardBody>
                    <CardFooter chart>
                      <span></span>
                      <Chevron className={classes.chevron} onClick={this.viewTournament.bind(this, 'torneo', tournament.id, stage)}/>
                    </CardFooter>
                  </Card>
                </GridItem>
              )
            })}
          </GridContainer>
        </div>
      </div>
    )
  }
}

Timba.propTypes = {
  classes: PropTypes.object.isRequired,
  bets: PropTypes.object,
  history: PropTypes.object,
  setBet: PropTypes.func,
}

export default withStyles(dashboardStyle)(Timba)
