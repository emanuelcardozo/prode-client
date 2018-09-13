import React from 'react'
import Match from './Match'
import PropTypes from 'prop-types'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer'
import CustomTabs from 'components/CustomTabs/CustomTabs'
import CardBody from 'components/Card/CardBody'
import Table from 'components/Table/Table'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'

import { league } from 'variables/charts'

class Torneo extends React.Component {

  render(){
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title=''
            headerColor='info'
            tabs={league.map((match) => {
              return ({ tabName: match.name, tabContent: (<Match match={match} />)})
            })}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color='info'>
              <h4>Torneo General Fulano</h4>
              <p>Ranking</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor='warning'
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

Torneo.propTypes = {
  leagues: PropTypes.object
}

export default Torneo
