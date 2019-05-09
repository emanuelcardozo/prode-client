import React from 'react'

class TeamMatch extends React.Component {

  render(){
    const { classes, team } = this.props

    return (
      <div className="col">
        <img className={classes.cover} src={team.logo.large} alt='...' />
        <h4 className={classes.cardTitle}><strong>{team.name}</strong></h4>
      </div>
    )
  }
}

export default TeamMatch
