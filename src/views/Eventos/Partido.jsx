import React from 'react'
import SDK from 'library/SDK'
import PropTypes from 'prop-types'
import TableMatch from './TableMatch'
import HeaderMatch from './HeaderMatch'
import Card from 'components/Card/Card'
import GridItem from 'components/Grid/GridItem'
import CardBody from 'components/Card/CardBody'
import CardFooter from 'components/Card/CardFooter'
import CustomTable from 'components/Table/CustomTable'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'

class Partido extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
    const self = this
    const { accessToken } = props.user

    SDK.getMainMatch(accessToken, function(response) { self.props.setMatch(response) })
  }

  betOnMatch() {
    const { user, match } = this.props
    const goals = Array.from(document.getElementsByTagName('select'))
    const inputs = Array.from(document.getElementsByTagName('input'))
    const result = []

    for(var i=0; i < inputs.length; i+=2 ) {
      if(inputs[i].checked) {
        result.push(inputs[i].value)
      } else if (inputs[i+1].checked) {
        result.push(inputs[i+1].value)
      } else {
        result.push("0")
      }
    }

    const gHome = goals[0].value
    const gAway = goals[1].value
    const foul = result[0]
    const yCard = result[1]
    const lateral = result[2]
    const corner = result[3]
    const sOnTarget = result[4]
    const offside = result[5]

    const params = { gHome, gAway, foul, yCard, lateral, corner, sOnTarget, offside, match_id: match.id, user_id: user.userID, accessToken: user.accessToken }
    this.props.setBetOnMatch(params)
    SDK.setMatchBet(params, (resp) => { this.props.setMessage(resp) })
  }

  handleChange = (event, value) => { this.setState({ value }) }

  render() {
    const { classes, bets, match, user } = this.props
    const { value } = this.state
    if(!match.date) return null

    return (
      <GridContainer style={{'justifyContent': 'center'}}>
        <GridItem xs={12} sm={12} md={8}>
          <AppBar position="static" style={{'background': 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', 'boxShadow': '0 3px 5px 2px rgba(33, 203, 243, .3)'}}>
            <Tabs
                value={value}
                onChange={this.handleChange}
                centered={true}
              >
              <Tab label="Partido" icon={<i className="far fa-calendar-alt"></i>} />
              <Tab label="Posiciones" icon={<i className="fas fa-list-ol"></i>} />
            </Tabs>
          </AppBar>
        </GridItem>
        {value === 0 &&
          <GridItem xs={12} sm={12} md={8}>
            <Card chart className={classes.card}>
              <HeaderMatch eventMacth={match} />
              <hr className={classes.line}/>
              <CardBody>
                <TableMatch eventMacth={match} bets={bets.match}/>
              </CardBody>
              <CardFooter>
                <span></span>
                <Button variant="contained" size="large" className={classes.button} onClick={this.betOnMatch.bind(this)}>
                  Guardar
                </Button>
                <span></span>
              </CardFooter>
            </Card>
          </GridItem>}
        {value === 1 &&
          <GridItem xs={12} sm={12} md={8}>
            <CustomTable accessToken={user.accessToken} user_id={user.userID} matchId={match.id} />
          </GridItem>}
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
