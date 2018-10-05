import React from 'react'
import PropTypes from 'prop-types'
import Matches from 'components/Stage/Matches'
import GridItem from 'components/Grid/GridItem'
import CustomTable from 'components/Table/CustomTable'
import GridContainer from 'components/Grid/GridContainer'
import CustomTabs from 'components/CustomTabs/CustomTabs'

class Torneo extends React.Component {

  render(){
    const { bets } = this.props
    const id = parseInt(this.props.computedMatch.params.id, 10)
    const tournament = bets.tournaments[id]

    if(!tournament) return null

    return (
      <GridContainer>
        {/* ----LISTA DE FECHAS DEL TORNEO---- */}
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title={tournament.name}
            headerColor='#abb2bf'
            tabs={tournament.dateMatches.map((dateMatch) => {
              return ({
                tabName: dateMatch.name,
                tabContent:
                (<Matches
                  matches={dateMatch.matches}
                  idToS={id}
                  setBet={this.props.setTournamentBet}
                  idDate={dateMatch.name}
                  state={dateMatch.state} />
                )})
            })}
          />
        </GridItem>
        {/* ----RANKING DE LOS JUGADORES DEL TORNEO---- */}
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
