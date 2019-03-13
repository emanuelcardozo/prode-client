import config from '../../config/config'
import $ from 'jquery'

const stages = {
  getTournamentStage: function(id, stage, accessToken, callback) {
    $.get(config.api + '/tournaments/' + id + '/stages/' + stage, { accessToken }, function(response) {
      callback(response)
    })
  },

  getListStage: function(id, accessToken, callback) {
    $.get(config.api + '/tournaments/' + id + '/states', { accessToken }, function(response) {
      callback(response)
    })
  },

  getRankingStage: function(tournament, stage, accessToken, callback) {
    $.get(config.api + '/tournaments/' + tournament + '/stages/'+ stage +'/points' , { accessToken }, function(response) {
      callback(response)
    })
  },

  getRankingMainMatch: function(id, accessToken, callback) {
    $.get(config.api + '/match/' + id + '/points', { accessToken }, function(response) {
      callback(response)
    })
  }
}

export default stages
