import config from '../../config/config'
import $ from 'jquery'

const tournaments = {
  getTournaments: function(accessToken, callback) {
    $.get(config.api + '/tournaments', { accessToken: accessToken } , function(response) {
      callback(response)
    })
  },

  getRankingTournament: function(id, accessToken, callback) {
    $.get(config.api + '/tournaments/' + id + '/points', { accessToken } , function(response) {
      callback(response)
    })
  },

  getMainMatch: function(accessToken, callback) {
    $.get(config.api + '/main_match', { accessToken }, function(response) {
      callback(response)
    })
  }
}

export default tournaments
