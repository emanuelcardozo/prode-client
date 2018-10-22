import React from 'react'
import Table from './Table'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import GridItem from 'components/Grid/GridItem'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'

class CustomTable extends React.Component {

  render() {
    const { title, color } = this.props
    return (
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color={ color }>
            <h4>{ title }</h4>
            <p>Ranking</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor={ color }
              tableHead={['Posición', 'Nombre', 'Mail', 'Pts']}
              tableData={[
                ['1', 'nombre1', 'prode@test.com', '12'],
                ['2', 'nombre2', 'prode@test.com', '11'],
                ['3', 'nombre3', 'prode@test.com', '9'],
                ['4', 'nombre4', 'prode@test.com', '5']
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    )
  }
}

CustomTable.defaultProps = { tableHeaderColor: 'gray' }

CustomTable.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
}

export default CustomTable
