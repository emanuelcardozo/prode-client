import config from '../../config/config'
import $ from 'jquery'

const leagues = {
  getLeagues: function(callback) {
    $.get(config.api + '/soccerseasons/457/leaguetable', function(response) {
      callback(response)
    })
  }
}

export default leagues
