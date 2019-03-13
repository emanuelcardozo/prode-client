import React from 'react'
import Table from './Table'
import SDK from 'library/SDK'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'

class CustomTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rows: [] }

    const self = this
    const { idTournament, idStage, accessToken, matchId } = self.props
    if(idStage) {
      SDK.getRankingStage(idTournament,idStage, accessToken, function(response) { self.setState({ rows: self.getRows(response)}) })
    } else {
      SDK.getRankingMainMatch(matchId, accessToken ,function(response) { self.setState({ rows: self.getRows(response)}) })
    }
  }

  componentDidUpdate(nextProps) {
    if(nextProps.idStage !== this.props.idStage) {
      const self = this
      const { idTournament, idStage, accessToken } = self.props
      SDK.getRankingStage(idTournament,idStage, accessToken, function(response) { self.setState({ rows: self.getRows(response)}) })
    }
  }

  getRows(data) {
    var rows = []
    data.forEach((d, i) => {
      var name = d.alias.length === 0 ? d.name : d.alias
      rows.push([(i + 1).toString(), name, d.points.toString()])
    })
    return rows
  }

  render() {
    const { title, subtitle, color } = this.props

    return (
      <Card>
        <CardHeader color={ color } >
          <h4>{ title }</h4>
          <p>{ subtitle }</p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor={ color }
            tableHead={['Posición', 'Nombre', 'Pts']}
            tableData={this.state.rows}
          />
        </CardBody>
      </Card>
    )
  }
}

CustomTable.defaultProps = { tableHeaderColor: 'gray' }

CustomTable.propTypes = {
  title: PropTypes.string,
  idTournament: PropTypes.string,
  idStage: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.array
}

export default CustomTable
