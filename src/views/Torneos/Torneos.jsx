import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import Button from '@material-ui/core/Button'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import CardHeader from 'components/Card/CardHeader'
import CardFooter from 'components/Card/CardFooter'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Torneos extends React.Component {

  viewTournament(type, index) {
    const { tournaments } = this.props
    const tournament = { ...tournaments[index] }
    const stage = tournament.current_stage.split(' ', tournament.current_stage.length)[1]
    document.getElementsByTagName('video')[0].play()
    document.getElementsByClassName('Main-player-2')[0].style.display = 'none'
    this.props.setBet({ obj: tournament, type: 'tournaments'})
    this.props.history.push('/' + type + '/' + tournament.id + '/' + stage)
  }

  render(){
    const { classes, tournaments } = this.props

    return (
      <GridContainer>
        {tournaments.map((tournament, index) => {
          if(!tournament) return null
          return (
            <GridItem xs={12} sm={8} md={4} key={index}>
              <Card chart>
                <CardHeader color='grey'>
                  <img src={tournament.img} alt='...' className={classes.imageTournament} />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}><strong>{tournament.name}</strong></h4>
                  <p>{tournament.current_stage}</p>
                </CardBody>
                <CardFooter chart>
                  <span></span>
                  <Button variant="contained" size="large" className={classes.button} onClick={this.viewTournament.bind(this, 'torneo', index)}>
                    Jugar
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          )
        })}
      </GridContainer>
    )
  }
}

Torneos.propTypes = {
  classes: PropTypes.object.isRequired,
  tournaments: PropTypes.array,
  history: PropTypes.object,
  setBet: PropTypes.func
}

export default withStyles(dashboardStyle)(Torneos)
