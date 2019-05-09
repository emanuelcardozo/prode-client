import React from 'react'
import Bets from './Bets'
import CardFooter from 'components/Card/CardFooter'

class FooterMatch extends React.Component {
  render(){
    const { state, date, user_id, hour, home, away, idStage, idMatch, accessToken, idTournament } = this.props

    return(
      <CardFooter chart>
        <div>
          {!state ?
            <div>
              <span>Fecha: {date} {hour}</span>
            </div> :
            <Bets home={home} away={away} idTournament={idTournament} idStage={idStage} user_id={user_id} idMatch={idMatch} accessToken={accessToken} />
          }
        </div>
      </CardFooter>
    )
  }
}

export default FooterMatch
