import React from 'react'
import PropTypes from 'prop-types'
import SDK from 'library/SDK'
import FacebookLogin from 'react-facebook-login'

class Login extends React.Component {

  facebookResponse(response) {
    const self = this
    SDK.signin(response, function(user) { self.props.setUser(user) })
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="center">
          <div className="text-center">
            <img src="/static/media/balon.b77c228e.png" alt="logo" style={{'width':'10%'}}/>
            <h1 className="cover-heading">ProdEvolution</h1>
            <p className="lead">Compite con tus amigos en la apasionante Superliga Argentina, suma puntos y convertite en campeón.</p>
            <FacebookLogin
              autoLoad={true}
              appId='711138055913158'
              textButton='   Inicio con Facebook'
              fields='name, email, picture, id'
              cssClass="btn btn-login"
              icon="fa-facebook"
              callback={this.facebookResponse.bind(this)}
            />
          </div>
        </div>
        <p className="footer-center">by Fundamentalistas.</p>
      </div>
    )
  }
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default Login
