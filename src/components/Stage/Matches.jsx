import React from 'react'
import Card from 'components/Card/Card'
import GridItem from 'components/Grid/GridItem'
import BodyMatch from './MatchComponents/BodyMatch'
import FooterMatch from './MatchComponents/FooterMatch'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class Matches extends React.Component {

  render() {
    const { matches, classes, idTournament, idStage,  userId, accessToken, setMatchBet } = this.props
    return(
      <GridContainer>
        {matches.map((match, index) => {
          const state = match.state === 'Finished' || match.state === 'Playing'
          const date = match.date || match.hour ? match.date : 'Pendiente'
          return (
            <GridItem xs={12} sm={12} md={12} key={index} id='grid'>
              <Card chart>
                <BodyMatch
                  match={match}
                  index={index}
                  state={state}
                  matches={matches}
                  accessToken={accessToken}
                  setMatchBet={setMatchBet}
                  userId={userId}
                  classes={classes} />
                <FooterMatch
                  state={state}
                  date={date}
                  user_id={userId}
                  hour={match.hour}
                  home={match.home}
                  away={match.away}
                  idStage={idStage}
                  idMatch={match.id}
                  accessToken={accessToken}
                  idTournament={idTournament} />
              </Card>
            </GridItem>
          )
        })}
      </GridContainer>
    )
  }
}

export default withStyles(dashboardStyle)(Matches)
