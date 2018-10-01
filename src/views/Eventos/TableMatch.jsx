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
    var row = []
    for(var i = 0; i < 10; i++) {
      row.push(<option value={i} key={id + i}>{i}</option>)
    }
    return row
  }

  render() {
    const { classes, eventMacth } = this.props
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
              <select className={classes.selectOptions}>
                {this.getSelectOptions(home.id.toString())}
              </select>
            </TableCell>
            <TableCell className={classes.tableCell}>Goles</TableCell>
            <TableCell className={classes.tableCell}>
              <select className={classes.selectOptions}>
                {this.getSelectOptions(away.id.toString())}
              </select>
            </TableCell>
          </TableRow>
          {rowsTable.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell className={classes.tableCell}>
                  <input type='radio' className={classes.inputRadio} name={index} value={home.id} />
                </TableCell>
                <TableCell className={classes.tableCell}>{row.name}</TableCell>
                <TableCell className={classes.tableCell}>
                  <input type='radio' className={classes.inputRadio} name={index} value={away.id} />
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
  eventMacth: PropTypes.object
}

export default withStyles(dashboardStyle)(TableMatch)
