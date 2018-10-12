import React from 'react'
import PropTypes from 'prop-types'
import FacebookLogin from 'react-facebook-login'

class Login extends React.Component {
  facebookResponse(response) { this.props.setUser(response) }

  render() {
    return (
      <div>
        <FacebookLogin
          appId='711138055913158'
          autoLoad={false}
          fields='name, email, picture, id'
          callback={this.facebookResponse.bind(this)}
          icon='fa-facebook'
        />
      </div>
    )
  }
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default Login
