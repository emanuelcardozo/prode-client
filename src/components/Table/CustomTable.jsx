import React from 'react'
import Table from './Table'
import SDK from 'library/SDK'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  [theme.breakpoints.down("sm") && theme.breakpoints.down("md")]: {
    card: { marginTop: '0px' }
  }
})

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
      rows.push([(i + 1).toString(), name, d.points.toString(), d.facebook_id])
    })
    return rows
  }

  render() {
    const { color, user_id, classes } = this.props

    return (
      <Card className={classes.card}>
        <CardBody>
          <Table
            tableHeaderColor={ color }
            tableHead={['Posición', 'Nombre', 'Pts']}
            tableData={this.state.rows}
            user_id={user_id}
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

export default withStyles(styles)(CustomTable)
