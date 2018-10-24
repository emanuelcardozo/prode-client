import config from '../../config/config'
import $ from 'jquery'

const user = {
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
  }
}

export default user
