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
            headerColor='danger'
            tabs={tournament.dateMatches.map((dateMatch) => {
              return ({
                tabName: 'Fecha ' + dateMatch.name,
                tabContent:
                (<Matches
                  matches={dateMatch.matches}
                  idToS={id}
                  setBet={this.props.setTournamentBet}
                  idDate={dateMatch.name} />
                )})
            })}
          />
        </GridItem>
        {/* ----RANKING DE LOS JUGADORES DEL TORNEO---- */}
        <CustomTable
          title={'Fecha General ' + tournament.name }
          subtitle={'Ranking'}
          color={'danger'}
          columns={['Posición', 'Nombre', 'Mail', 'Pts']}
          data={[
            ['1', 'nombre1', 'prode@test.com', '12'],
            ['2', 'nombre2', 'prode@test.com', '11'],
            ['3', 'nombre3', 'prode@test.com', '9'],
            ['4', 'nombre4', 'prode@test.com', '5']
          ]}
        />
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
