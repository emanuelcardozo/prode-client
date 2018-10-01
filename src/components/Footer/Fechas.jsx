import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import Today from '@material-ui/icons/Today'
import Drawer from '@material-ui/core/Drawer'
import Avatar from '@material-ui/core/Avatar'
import withStyles from '@material-ui/core/styles/withStyles'
import SnackbarContent from 'components/Snackbar/SnackbarContent'
import headerStyle from 'assets/jss/material-dashboard-react/components/headerStyle'

import { stages } from 'variables/generales'

class Fechas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bottom: false }
  }

  toggleDrawer(cond) { this.setState({ bottom: cond }) }

  handleClick(index) {
    const stage = { ...stages[index] }
    this.props.setBet({ obj: stage, type: 'matches'})
    this.setState({ bottom: false })
  }

  render() {
    return (
      <div className='izquierda' style={{float: 'left'}}>
        <Chip
          color='primary'
          label='Agregar Fechas'
          avatar={<Avatar><Today /></Avatar>}
          variant='outlined'
          clickable
          onClick={this.toggleDrawer.bind(this, true)}
        />
        <Drawer
          anchor='bottom'
          open={this.state.bottom}
          onClose={this.toggleDrawer.bind(this, false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer.bind(this, false)}
          >
            {stages.map((stage, index) => {
              return (
                <div key={index} style={{ cursor: 'pointer' }}>
                  <SnackbarContent
                    message={stage.league + ' - Fecha: ' + stage.number}
                    color='success'
                    icon={Today}
                    click={this.handleClick.bind(this, index)}
                  />
                </div>
              )
            })}
          </div>
        </Drawer>
      </div>
    )
  }
}

Fechas.propTypes = {
  setBet: PropTypes.func
}

export default withStyles(headerStyle)(Fechas)
