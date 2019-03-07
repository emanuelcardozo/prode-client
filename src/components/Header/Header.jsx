import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import Button from 'components/CustomButtons/Button'
import IconButton from '@material-ui/core/IconButton'
import withStyles from '@material-ui/core/styles/withStyles'
import headerStyle from 'assets/jss/material-dashboard-react/components/headerStyle.jsx'

class Header extends React.Component {

  makeBrand() {
    var name = ''
    this.props.routes.map(prop => {
      if (prop.path === this.props.location.pathname) {
        name = prop.navbarName
      }
      return null
    })
    return name
  }

  render() {
    const { classes } = this.props

    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button color='transparent' href='#' className={classes.title}>
              {this.makeBrand()}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  routes: PropTypes.array,
  handleDrawerToggle: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

export default withStyles(headerStyle)(Header)
