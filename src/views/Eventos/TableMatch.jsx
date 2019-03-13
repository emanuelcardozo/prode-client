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
    const { bet_corner, bet_faul, bet_side, bet_offside, bet_shot, bet_card } = this.props.eventMacth
    const { foul, yCard, lateral, corner, sOnTarget, offside } = this.props.bets
    var value = false
    if(this.props.eventMacth.bet_home !== null && this.props.bets.gHome !== null) {
      switch (index) {
      case 0:
        value = (foul ? id === foul : id === bet_faul.toString())
        break
      case 1:
        value = (yCard ? id === yCard : id === bet_card.toString())
        break
      case 2:
        value = (lateral ? id === lateral : id === bet_side.toString())
        break
      case 3:
        value = (corner ? id === corner : id === bet_corner.toString())
        break
      case 4:
        value = (sOnTarget ? id === sOnTarget : id === bet_shot.toString())
        break
      default:
        value = (offside ? id === offside : id === bet_offside.toString())
      }
      return value
    } else {
    return value
    }
  }

  render() {
    const { classes, eventMacth, bets } = this.props
    const { home, away, bet_home, bet_away } = eventMacth

    return (
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCell}><img src={home.logo.large} alt='...' style={{ width: '20%' }}/></TableCell>
            <TableCell className={classes.tableCell}>EQUIPOS</TableCell>
            <TableCell className={classes.tableCell}><img src={away.logo.large} alt='...' style={{ width: '20%' }}/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCell}>
              <select className={classes.selectOptions} defaultValue={bets.gHome ? bets.gHome : (bet_home !== null ? bet_home : 0)}>
                {this.getSelectOptions(home.id.toString())}
              </select>
            </TableCell>
            <TableCell className={classes.tableCell}>Goles</TableCell>
            <TableCell className={classes.tableCell}>
              <select className={classes.selectOptions} defaultValue={bets.gAway ? bets.gAway : (bet_away !== null ? bet_away : 0)}>
                {this.getSelectOptions(away.id.toString())}
              </select>
            </TableCell>
          </TableRow>
          {rowsTable.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell className={classes.tableCell}>
                  <input type='radio' className={classes.inputRadio} name={index} value={1} defaultChecked={this.isChecked(index, 1 + "")} />
                </TableCell>
                <TableCell className={classes.tableCell}>{row.name}</TableCell>
                <TableCell className={classes.tableCell}>
                  <input type='radio' className={classes.inputRadio} name={index} value={2} defaultChecked={this.isChecked(index, 2 + "")}/>
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
