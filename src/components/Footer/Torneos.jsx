import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import Drawer from '@material-ui/core/Drawer'
import Avatar from '@material-ui/core/Avatar'
import Video from '@material-ui/icons/VideogameAsset'
import withStyles from '@material-ui/core/styles/withStyles'
import SnackbarContent from 'components/Snackbar/SnackbarContent'
import headerStyle from 'assets/jss/material-dashboard-react/components/headerStyle'

import { leagues } from 'variables/generales'

class Torneos extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bottom: false }
  }

  toggleDrawer(cond) { this.setState({ bottom: cond }) }

  handleClick(index) {
    const tournament = { ...leagues[index] }
    this.props.setBet({ obj: tournament, type: 'tournaments'})
    this.setState({ bottom: false })
  }

  render() {
    return (
      <div className='derecha' style={{float: 'right'}}>
        <Chip
          label='Agregar Torneos'
          avatar={<Avatar><Video /></Avatar>}
          variant='outlined'
          clickable
          onClick={this.toggleDrawer.bind(this, true)}
        />        <Drawer
          anchor='bottom'
          open={this.state.bottom}
          onClose={this.toggleDrawer.bind(this, false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer.bind(this, false)}
          >
            {leagues.map((league, index) => {
              return (
                <div key={index} style={{ cursor: 'pointer' }}>
                  <SnackbarContent
                    message={league.name + ' - ' + league.dateMatch}
                    color='warning'
                    icon={Video}
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

Torneos.propTypes = {
  setBet: PropTypes.func
}

export default withStyles(headerStyle)(Torneos)
