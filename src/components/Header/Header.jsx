import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Menu from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import Avatar from '@material-ui/core/Avatar'
import defaultState from 'config/state'
import Toolbar from '@material-ui/core/Toolbar'
import Logout from '@material-ui/icons/HighlightOff'
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

  logout() {
    window.FB.logout()
    this.props.setUser(defaultState.user)
  }

  render() {
    const { classes, user } = this.props

    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            <Button color='transparent' href='#' className={classes.title}>
              {this.makeBrand()}
            </Button>
          </div>
          <Avatar alt='' src={user.picture.data.url} className={classNames(classes.avatar, classes.bigAvatar)} />
          <Logout className={classes.logout} onClick={this.logout.bind(this)} />
          <Hidden mdUp implementation='css'>
            <IconButton color='inherit' aria-label='open drawer' onClick={this.props.handleDrawerToggle}>
              <Menu />
            </IconButton>
          </Hidden>
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
