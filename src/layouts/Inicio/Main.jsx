import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect } from 'react-router-dom'
import { PropsRoute } from 'react-router-with-props'
import Header from 'components/Header/Header.jsx'
import Sidebar from 'components/Sidebar/Sidebar.jsx'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardRoutes from 'routes/dashboard.jsx'
import dashboardStyle from 'assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx'
import image from 'assets/img/stadium.jpg'
import logo from 'assets/img/balon.png'
import Login from './Login'
import SDK from 'library/SDK'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mobileOpen: false }

    this.resizeFunction = this.resizeFunction.bind(this)
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
  }

  handleDrawerToggle() { this.setState({ mobileOpen: !this.state.mobileOpen }) }

  resizeFunction() { if(window.innerWidth >= 960) this.setState({ mobileOpen: false }) }

  componentWillUnmount() { window.removeEventListener('resize', this.resizeFunction) }

  componentDidMount() {
    const self = this
    if (navigator.platform.indexOf('Win') > -1) {
      const container = document.getElementById('mainPanel')
      new PerfectScrollbar(container)
    }
    window.addEventListener('resize', this.resizeFunction)

    SDK.getTournaments((response) => { self.props.setTournaments(response) })
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      const container = document.getElementById('mainPanel')
      container.scrollTop = 0
      if (this.state.mobileOpen) this.setState({ mobileOpen: false })
    }
  }

  render() {
    const { classes, ...rest } = this.props

    if(!this.props.user.id) return <Login {...this.props} />

    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          logoText={'ProdEvolution'}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color='green'
          {...rest}
        />

        <div className={classes.mainPanel} id='mainPanel'>

          <Header
            routes={dashboardRoutes}
            setUser={this.props.setUser}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />

          <div className={classes.content}>
            <div className={classes.container}>
              {<Switch>
                {dashboardRoutes.map((prop, key) => {
                  if (prop.redirect)
                    return <Redirect from={prop.path} to={prop.to} key={key} {...rest} />
                  return <PropsRoute path={prop.path} component={prop.component} key={key} {...rest}/>
                })}
              </Switch>}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

Main.propTypes = { classes: PropTypes.object.isRequired }

export default withStyles(dashboardStyle)(Main)
