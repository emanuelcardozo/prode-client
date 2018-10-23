import config from '../../config/config'
import $ from 'jquery'

const tournaments = {
  getTournaments: function(callback) {
    $.get(config.api + '/tournaments', function(response) {
      callback(response)
    })
  },

  getTournamentStage: function(id, stage, accessToken, callback) {
    $.get(config.api + '/tournaments/' + id + '/stages/' + stage, { accessToken }, function(response) {
      callback(response)
    })
  },

  getListStage: function(id, callback) {
    $.get(config.api + '/tournaments/' + id + '/states', function(response) {
      callback(response)
    })
  },

  getRankingTournament: function(id, callback) {
    $.get(config.api + '/tournaments/' + id + '/points' , function(response) {
      callback(response)
    })
  },

  getRankingStage: function(tournament, stage, callback) {
    $.get(config.api + '/tournaments/' + tournament + '/stages/'+ stage +'/points' , function(response) {
      callback(response)
    })
  },

  getBetsOfMatch: function(tournament, stage, match, callback) {
    $.get(config.api + '/bets_of_match', { tournament_id: tournament, stage, match_id: match}, function(response) {
      callback(response)
    })
  },

  signin: function(data, callback) {
    $.ajax({
      url: config.api + '/sign_in',
      method: 'GET',
      data: data,
      success: function () {
        callback(data)
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus , errorThrown)
      }
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
