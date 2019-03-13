import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from 'components/Card/CardHeader'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class HeaderMatch extends React.Component {

  render(){
    const { classes } = this.props
    const { home, away, date, stage, stadium, tournament } = this.props.eventMacth

    return (
      <CardHeader>
        <div className={classes.headerTitle}>
          <h4 style={{margin: '0px'}}><strong>{tournament}</strong></h4>
          <p>{date}</p>
        </div>
        <div className={classes.headerTeams}>
          <div className={classes.imgHome}>
            <img src={home.logo.large} alt='...' />
            <p><strong>{home.name}</strong></p>
          </div>
          <div className={classes.headerGoals}>vs</div>
          <div className={classes.imgAway}>
            <img src={away.logo.large} alt='...' />
            <p><strong>{away.name}</strong></p>
          </div>
        </div>
        <div className={classes.headerTeams} >
          <p>{stage} - {stadium}</p>
        </div>
      </CardHeader>
    )
  }
}

HeaderMatch.propTypes = {
  match: PropTypes.object,
  classes: PropTypes.object
}

export default withStyles(dashboardStyle)(HeaderMatch)
