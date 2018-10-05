import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import Button from '@material-ui/core/Button'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import CardHeader from 'components/Card/CardHeader'
import CardFooter from 'components/Card/CardFooter'
import Play from '@material-ui/icons/PlayCircleFilled'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

import { leagues } from 'variables/generales'

class Torneos extends React.Component {

  viewTournament(type, index) {
    const tournament = { ...leagues[index] }
    this.props.setBet({ obj: tournament, type: 'tournaments' })
    this.props.history.push('/' + type + '/' + tournament.id)
  }

  render(){
    const { classes } = this.props

    return (
      <GridContainer>
        {leagues.map((tournament, index) => {
          if(!tournament) return null
          return (
            <GridItem xs={12} sm={12} md={4} key={index}>
              <Card chart>
                <CardHeader color='grey'>
                  <img src={tournament.img} alt='...' style={{ width: '100%' }}/>
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>{tournament.name}</h4>
                  <p>Fecha {tournament.dateMatch}</p>
                </CardBody>
                <CardFooter chart>
                  <span></span>
                  <Button variant="contained" size="small" className={classes.button} onClick={this.viewTournament.bind(this, 'torneo', index)}>
                    Jugar &nbsp; <Play className={classes.chevron} />
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
  leagues: PropTypes.object,
  history: PropTypes.object,
  setBet: PropTypes.func
}

export default withStyles(dashboardStyle)(Torneos)
