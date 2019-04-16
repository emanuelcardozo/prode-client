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
    this.state = { container: [], ranking: [], value: 0, volume: "fa fa-volume-up", muted: false }

    const self = this
    const { id, stage } = self.props.computedMatch.params
    const { accessToken } = self.props.user

    SDK.getTournamentStage(id, stage, accessToken, function(response) { self.props.setStage(response) })
  }

  handleChange = (event, value) => { this.setState({ value }) }

  toggleVolume() {
    const player = document.getElementsByTagName('audio')[0]
    if(player.muted) {
      this.setState({ volume: "fa fa-volume-up" })
      player.muted = false
    } else {
      this.setState({ volume: "fa fa-volume-off" })
      player.muted = true
    }
  }

  render(){
    const { bets, user, classes } = this.props
    const { id, stage } = this.props.computedMatch.params
    const tournament = bets.tournaments[id]
    const { value, volume } = this.state

    if(!tournament || bets.stage.length === 0) return null

    return (
      <GridContainer style={{'justifyContent': 'center'}}>
        <GridItem xs={12} sm={12} md={8}>
          <AppBar position="static" style={{'background': 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', 'boxShadow': '0 3px 5px 2px rgba(33, 203, 243, .3)'}}>
            <div onClick={this.toggleVolume.bind(this)} className={classes.volumeContainer}><i className={volume} /></div>
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
            <Card className={classes.card}>
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
              user_id={user.userID}
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
