import React from 'react'
import Table from './Table'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import GridItem from 'components/Grid/GridItem'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'

class CustomTable extends React.Component {

  render() {
    const { title, subtitle, color, columns, data } = this.props
    return (
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color={ color }>
            <h4>{ title }</h4>
            <p>{ subtitle }</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor={ color }
              tableHead={ columns }
              tableData={ data }
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
  subtitle: PropTypes.string,
  color: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array
}

export default CustomTable
