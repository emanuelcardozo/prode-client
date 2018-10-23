import React from 'react'
import SDK from 'library/SDK'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import Avatar from '@material-ui/core/Avatar'
import Matches from 'components/Stage/Matches'
import GridItem from 'components/Grid/GridItem'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'
import CustomTable from 'components/Table/CustomTable'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Torneo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { container: [], ranking: [] }

    const self = this
    const { id, stage } = self.props.computedMatch.params
    const { accessToken } = self.props.user

    SDK.getTournamentStage(id, stage, accessToken, function(response) { self.props.setStage(response) })
    SDK.getRankingTournament(id, function(response) { self.setState({ ranking: response}) })
    SDK.getListStage(id, function(response) { self.setState({ container: response }) })
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

  newStage(tournamentId, numStage) { this.props.history.push('/torneo/' + tournamentId + '/' + numStage ) }

  listStages() {
    const { classes, computedMatch } = this.props
    const { container } = this.state
    const { id } = computedMatch.params

    var stages = []
    container.forEach((stage, index) => {
      const color = stage ? '#d23232' : 'green'
      stages.push(
        <Avatar className={classes.stage} style={{ backgroundColor: color }} key={index} onClick={this.newStage.bind(this, id, index+1)}>
          <strong>{index+1}</strong>
        </Avatar>
      )
    })
    return stages
  }

  render(){
    const { classes, bets } = this.props
    const id = this.props.computedMatch.params.id
    const tournament = bets.tournaments[id]

    if(!tournament || bets.stage.length === 0) return null

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader className={classes.tournamentContainer} style={{ backgroundImage: `url(${tournament.img})` }}>
              <p className={classes.tournamentTitle}>{tournament.name}</p>
              <div className={classes.stagesConteiner}>
                { this.listStages() }
              </div>
            </CardHeader>
            <CardBody>
              <Matches
                idToS={id}
                idDate={'0'}
                matches={bets.stage}
                setMatchBet={this.props.setMatchBet}
                userId={this.props.user.id}
                state={false} />
            </CardBody>
          </Card>
        </GridItem>
        <CustomTable title={tournament.name} color={'danger'} data={this.state.ranking} />
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
