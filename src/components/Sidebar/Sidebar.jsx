import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import sidebarStyle from 'assets/jss/material-dashboard-react/components/sidebarStyle.jsx'

const Sidebar = ({ ...props }) => {
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false
  }
  const { classes, color, logo, image, logoText, routes, user } = props
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.redirect || prop.notDisplay) return null
        var activePro = ' '
        const listItemClasses = classNames({
          [' ' + classes[color]]: activeRoute(prop.path)
        })
        const whiteFontClasses = classNames({
          [' ' + classes.whiteFont]: activeRoute(prop.path)
        })
        return (
          <NavLink
            to={prop.path}
            className={activePro + classes.item}
            activeClassName='active'
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                {typeof prop.icon === 'string' ? (
                  <i className={prop.icon}></i>
                ) : (
                  <Avatar alt='' src={user.picture.data.url} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                className={classes.itemText + whiteFontClasses}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        )
      })}
    </List>
  )

  var linksResponsive = (
    <List className={classes.listResponsive}>
      {routes.map((prop, key) => {
        if (prop.redirect || prop.notDisplay) return null
        const lightBlueFontClasses = classNames({
          [' ' + classes.blackFont]: activeRoute(prop.path)
        })
        return (
          <NavLink to={prop.path} key={key}>
            <div className={classes.navLinkResponsive}>
              <i className={prop.icon + lightBlueFontClasses}></i>
              <p style={{'margin': '0px'}} className={lightBlueFontClasses}>{prop.sidebarName}</p>
            </div>
          </NavLink>
        )
      })}
    </List>
  )

  var brand = (
    <div className={classes.logo} onClick={(e)=>{ e.preventDefault() }}>
      <a href={classes.logoLink} className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt='logo' className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  )

  return (
    <div>
      <Hidden mdUp implementation='css'>
        <div className={classes.tabContent}>{linksResponsive}</div>
      </Hidden>
      <Hidden smDown implementation='css'>
        <Drawer
          anchor='left'
          variant='permanent'
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  )
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object,
  color: PropTypes.string,
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.array,
  open: PropTypes.bool,
  user: PropTypes.object,
  handleDrawerToggle:PropTypes.func
}

export default withStyles(sidebarStyle)(Sidebar)
