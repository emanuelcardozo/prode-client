import React from 'react'
import Table from './Table'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import GridItem from 'components/Grid/GridItem'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'

class CustomTable extends React.Component {

  getRows(data) {
    var rows = []
    data.forEach((d, i) => {
      rows.push([(i + 1).toString(), d.name, d.points.toString()])
    })
    return rows
  }

  render() {
    const { title, color, data } = this.props

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
              tableHead={['Posición', 'Nombre', 'Pts']}
              tableData={this.getRows(data)}
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
  color: PropTypes.string,
  data: PropTypes.array
}

export default CustomTable
