import React from 'react'
import SDK from 'library/SDK'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import Matches from 'components/Stage/Matches'
import GridItem from 'components/Grid/GridItem'
import CardBody from 'components/Card/CardBody'
import CustomTable from 'components/Table/CustomTable'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class Torneo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { container: [], ranking: [], value: 0 }

    const self = this
    const { id, stage } = self.props.computedMatch.params
    const { accessToken } = self.props.user

    SDK.getTournamentStage(id, stage, accessToken, function(response) { self.props.setStage(response) })
    //SDK.getListStage(id, accessToken, function(response) { self.setState({ container: response }) })
  }

  componentDidUpdate(nextProps) {
    const { stage, id } = this.props.computedMatch.params
    const nextParams = nextProps.computedMatch.params

    if(stage !== nextParams.stage || id !== nextParams.id) {
      const self = this
      const { id, stage } = self.props.computedMatch.params
      const { accessToken } = self.props.user

      SDK.getTournamentStage(id, stage, accessToken, function(response) { self.props.setStage(response) })
    }
  }

  handleChange = (event, value) => { this.setState({ value }) }

  render(){
    const { bets, user } = this.props
    const { id, stage } = this.props.computedMatch.params
    const tournament = bets.tournaments[id]
    const { value } = this.state

    if(!tournament || bets.stage.length === 0) return null

    return (
      <GridContainer style={{'justifyContent': 'center'}}>
        <GridItem xs={12} sm={12} md={8}>
          <AppBar position="static" style={{'background': 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', 'boxShadow': '0 3px 5px 2px rgba(33, 203, 243, .3)'}}>
            <Tabs
                value={value}
                onChange={this.handleChange}
                centered={true}
              >
              <Tab label="Partidos" icon={<i className="far fa-calendar-alt"></i>} />
              <Tab label="Posiciones" icon={<i className="fas fa-list-ol"></i>} />
            </Tabs>
          </AppBar>
        </GridItem>
        {value === 0 &&
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardBody>
                <Matches
                  idTournament={id}
                  idStage={stage}
                  idDate={'0'}
                  matches={bets.stage}
                  setMatchBet={this.props.setMatchBet}
                  userId={user.id}
                  state={false}
                  accessToken={user.accessToken} />
              </CardBody>
            </Card>
          </GridItem>}
        {value === 1 &&
          <GridItem xs={12} sm={12} md={8}>
            <CustomTable
              idTournament={id}
              idStage={stage}
              accessToken={user.accessToken} />
          </GridItem>}
      </GridContainer>
    )
  }
}

Torneo.propTypes = {
  leagues: PropTypes.object,
  classes: PropTypes.object,
  bets: PropTypes.object,
  history: PropTypes.object,
  computedMatch: PropTypes.object,
  location: PropTypes.object,
  user: PropTypes.object,
  setMatchBet: PropTypes.func,
  tournaments: PropTypes.array
}

export default withStyles(dashboardStyle)(Torneo)
