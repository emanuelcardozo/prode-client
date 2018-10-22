import React from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'

class Login extends React.Component {

  facebookResponse(response) { this.props.setUser(response) }

  render() {
    return (
      <div>
        <FacebookLogin
          autoLoad={true}
          icon='fa-facebook'
          appId='711138055913158'
          textButton='Login con Facebook'
          fields='name, email, picture, id'
          callback={this.facebookResponse.bind(this)}
        />
      </div>
    )
  }
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default Login
