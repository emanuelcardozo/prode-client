import React from 'react'
import Match from 'components/Stage/Matches'
import PropTypes from 'prop-types'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer'
import CardBody from 'components/Card/CardBody'
import Table from 'components/Table/Table'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'

class Stage extends React.Component {

  render(){
    const { bets } = this.props

    const id = parseInt(this.props.computedMatch.params.id, 10)
    const stage = bets.matches[id]
    if(!stage) return null
    return (
      <GridContainer>
        {/* ----LISTA DE FECHAS DEL TORNEO---- */}
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color='info'>
              <h4>la chafe</h4>
            </CardHeader>
            <CardBody>
              <Match
                matches={stage.matches}
                setBet={this.props.setStageBet}
                idToS={stage.id} />
            </CardBody>
          </Card>
        </GridItem>
        {/* ----RANKING DE LOS JUGADORES DEL TORNEO---- */}
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color='info'>
              <h4>Fecha General { stage.name }</h4>
              <p>Ranking</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor='info'
                tableHead={['Posición', 'Nombre', 'Mail']}
                tableData={[
                  ['1', 'nombre1', 'prode@test.com'],
                  ['2', 'nombre2', 'prode@test.com'],
                  ['3', 'nombre3', 'prode@test.com'],
                  ['4', 'nombre4', 'prode@test.com']
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

Stage.propTypes = {
  leagues: PropTypes.object,
  bets: PropTypes.object,
  computedMatch: PropTypes.object,
  location: PropTypes.object,
  setStageBet: PropTypes.func
}

export default Stage
