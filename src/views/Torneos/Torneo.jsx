import React from 'react'
import Match from 'components/Stage/Matches'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import Table from 'components/Table/Table'
import GridItem from 'components/Grid/GridItem'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'
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
                (<Match
                  matches={dateMatch.matches}
                  idToS={id}
                  setBet={this.props.setTournamentBet}
                  idDate={dateMatch.name} />
                )})
            })}
          />
        </GridItem>
        {/* ----RANKING DE LOS JUGADORES DEL TORNEO---- */}
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color='danger'>
              <h4>Torneo General { tournament.name }</h4>
              <p>Ranking</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor='danger'
                tableHead={['Posición', 'Nombre', 'Mail', 'Ptos']}
                tableData={[
                  ['1', 'nombre1', 'prode@test.com', '20'],
                  ['2', 'nombre2', 'prode@test.com', '19'],
                  ['3', 'nombre3', 'prode@test.com', '15'],
                  ['4', 'nombre4', 'prode@test.com', '14']
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
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
