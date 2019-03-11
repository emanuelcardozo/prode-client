import config from '../../config/config'
import $ from 'jquery'

const user = {
  signin: function(data, callback) {
    $.ajax({
      url: config.api + '/sign_in',
      method: 'GET',
      data: data,
      success: function (resp) {
        data['alias'] = resp.alias
        callback(data)
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus , errorThrown)
      }
    })
  },

  changeAlias: function(user_id, alias, accessToken, callback) {
    $.post(config.api + '/alias', { user_id, alias, accessToken } , function(response) {
      callback(response)
    })
  }
}

export default user
