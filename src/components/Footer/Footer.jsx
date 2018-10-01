import React from 'react'
import Fechas from './Fechas'
import Torneos from './Torneos'
import PropTypes from 'prop-types'

class Footer extends React.Component {

  render() {
    const { setBet } = this.props

    return (
      <div style={{ display: 'inline-flex', width: '100%' }}>
        <Fechas setBet={setBet} />
        <Torneos setBet={setBet} />
      </div>
    )
  }
}

Footer.propTypes = {
  setBet: PropTypes.func
}

export default Footer
