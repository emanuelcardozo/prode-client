import React from 'react'
import SDK from 'library/SDK'
import PropTypes from 'prop-types'
import Matches from 'components/Stage/Matches'
import GridItem from 'components/Grid/GridItem'
import CustomTable from 'components/Table/CustomTable'
import GridContainer from 'components/Grid/GridContainer'
import CustomTabs from 'components/CustomTabs/CustomTabs'

class Torneo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { matches: [] }

    const self = this
    const id = this.props.computedMatch.params.id
    SDK.getTournamentStage(id, function(response) { self.setState({ matches: response }) })
  }

  render(){
    const { bets } = this.props
    const id = this.props.computedMatch.params.id
    const tournament = bets.tournaments[id]

    if(!tournament) return null
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title={tournament.name}
            headerColor='#abb2bf'
            tabs={this.state.matches.map((dateMatch, index) => {
              return ({
                tabName: (index + 1).toString(),
                tabContent:
                (<Matches
                  matches={dateMatch.matches}
                  idToS={id}
                  setBet={this.props.setTournamentBet}
                  idDate={index.toString()}
                  state={!dateMatch.state} />
                )})
            })}
          />
        </GridItem>
        <CustomTable title={tournament.name} color={'danger'} />
      </GridContainer>
    )
  }
}

Torneo.propTypes = {
  leagues: PropTypes.object,
  bets: PropTypes.object,
  computedMatch: PropTypes.object,
  location: PropTypes.object,
  setTournamentBet: PropTypes.func
}

export default Torneo
