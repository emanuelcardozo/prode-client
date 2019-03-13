import config from '../../config/config'
import $ from 'jquery'

const bets = {
  getBetsOfMatch: function(tournament, stage, match, accessToken, callback) {
    $.get(config.api + '/bets_of_match', { tournament_id: tournament, stage, match_id: match, accessToken}, function(response) {
      callback(response)
    })
  },

  setBet: function(params) {
    $.ajax({
      method: 'POST',
      data: params,
      url: config.api + '/bets'
    })
  },

  setMatchBet: function(params) {
    $.ajax({
      method: 'POST',
      data: params,
      url: config.api + '/bet_matches'
    })
  }
}

export default bets
