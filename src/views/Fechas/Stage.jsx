import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import Matches from 'components/Stage/Matches'
import GridItem from 'components/Grid/GridItem'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'
import CustomTable from 'components/Table/CustomTable'
import GridContainer from 'components/Grid/GridContainer'

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
              <Matches
                matches={stage.matches}
                setBet={this.props.setStageBet}
                idToS={stage.id} />
            </CardBody>
          </Card>
        </GridItem>
        {/* ----RANKING DE LOS JUGADORES DEL TORNEO---- */}
        <CustomTable
          title={'Fecha General ' + stage.name }
          subtitle={'Ranking'}
          color={'info'}
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

Stage.propTypes = {
  leagues: PropTypes.object,
  bets: PropTypes.object,
  computedMatch: PropTypes.object,
  location: PropTypes.object,
  setStageBet: PropTypes.func
}

export default Stage
