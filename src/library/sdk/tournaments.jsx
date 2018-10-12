import config from '../../config/config'
import $ from 'jquery'

const tournaments = {
  getTournaments: function(callback) {
    $.get(config.api + '/tournaments', function(response) {
      callback(response)
    })
  },

  getTournamentStage: function(id, stage, callback) {
    $.get(config.api + '/tournaments/' + id + '/stages/' + stage, function(response) {
      callback(response)
    })
  },

  getListStage: function(id, callback) {
    $.get(config.api + '/tournaments/' + id + '/states', function(response) {
      callback(response)
    })
  },

  setBet: function(params) {
    $.ajax({
      method: 'POST',
      data: params,
      url: config.api + '/bets'
    })
  }
}

export default tournaments
