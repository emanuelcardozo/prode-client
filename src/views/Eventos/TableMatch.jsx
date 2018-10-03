import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'
import { rowsTable } from 'variables/generales'

class TableMatch extends React.Component {

  getSelectOptions(id) {
    var options = []
    for(var i = 0; i < 10; i++) {
      options.push(<option value={i} key={id + i}>{i}</option>)
    }
    return options
  }

  isChecked(index, id) {
    const { corner, foul, lateral, offside, sOnTarget, yCard } = this.props.bets
    var value = false
    switch (index) {
    case 0:
      value = id === foul
      break
    case 1:
      value = id === yCard
      break
    case 2:
      value = id === lateral
      break
    case 3:
      value = id === corner
      break
    case 4:
      value = id === sOnTarget
      break
    default:
      value = id === offside
    }
    return value
  }

  render() {
    const { classes, eventMacth, bets } = this.props
    const { home, away } = eventMacth

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}><img src={home.img} alt='...' style={{ width: '20%' }}/></TableCell>
            <TableCell className={classes.tableCell}>EQUIPOS</TableCell>
            <TableCell className={classes.tableCell}><img src={away.img} alt='...' style={{ width: '20%' }}/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCell}>
              <select className={classes.selectOptions} defaultValue={bets.gHome}>
                {this.getSelectOptions(home.id.toString())}
              </select>
            </TableCell>
            <TableCell className={classes.tableCell}>Goles</TableCell>
            <TableCell className={classes.tableCell}>
              <select className={classes.selectOptions} defaultValue={bets.gAway}>
                {this.getSelectOptions(away.id.toString())}
              </select>
            </TableCell>
          </TableRow>
          {rowsTable.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell className={classes.tableCell}>
                  <input type='radio' className={classes.inputRadio} name={index} value={home.id} defaultChecked={this.isChecked(index, home.id.toString())} />
                </TableCell>
                <TableCell className={classes.tableCell}>{row.name}</TableCell>
                <TableCell className={classes.tableCell}>
                  <input type='radio' className={classes.inputRadio} name={index} value={away.id} defaultChecked={this.isChecked(index, away.id.toString())}/>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}

TableMatch.propTypes = {
  classes: PropTypes.object.isRequired,
  bets: PropTypes.object,
  eventMacth: PropTypes.object
}

export default withStyles(dashboardStyle)(TableMatch)
