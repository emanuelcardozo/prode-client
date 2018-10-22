import React from 'react'
import PropTypes from 'prop-types'
import TableMatch from './TableMatch'
import HeaderMatch from './HeaderMatch'
import Card from 'components/Card/Card'
import Games from '@material-ui/icons/Games'
import GridItem from 'components/Grid/GridItem'
import CardBody from 'components/Card/CardBody'
import CardFooter from 'components/Card/CardFooter'
import CustomTable from 'components/Table/CustomTable'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

import { eventMacth } from 'variables/generales'

class Partido extends React.Component {

  betOnMatch() {
    const goals = Array.from(document.getElementsByTagName('select'))
    const inputs = Array.from(document.getElementsByTagName('input'))
    const result = inputs.filter(word => word.checked)
    if(result.length === 6) {
      const gHome = goals[0].value
      const gAway = goals[1].value
      const foul = result[0].value
      const yCard = result[1].value
      const lateral = result[2].value
      const corner = result[3].value
      const sOnTarget = result[4].value
      const offside = result[5].value

      this.props.setBetOnMatch({ gHome, gAway, foul, yCard, lateral, corner, sOnTarget, offside })
    }
  }

  render() {
    const { classes, bets } = this.props
    const { home, away } = eventMacth

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <HeaderMatch eventMacth={eventMacth} />
            <hr className={classes.line}/>
            <CardBody>
              <TableMatch eventMacth={eventMacth} bets={bets.match}/>
            </CardBody>
            <CardFooter>
              <Games onClick={this.betOnMatch.bind(this)} style={{ cursor: 'pointer' }}/>
            </CardFooter>
          </Card>
        </GridItem>
        <CustomTable title={home.name + ' vs ' + away.name} color={'primary'} />
      </GridContainer>
    )
  }
}

Partido.propTypes = {
  classes: PropTypes.object.isRequired,
  bets: PropTypes.object,
  setBetOnMatch: PropTypes.func
}

export default withStyles(dashboardStyle)(Partido)
