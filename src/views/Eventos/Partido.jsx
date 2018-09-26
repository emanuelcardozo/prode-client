import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from 'components/Grid/GridContainer'

import CustomTable from 'components/Table/CustomTable'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx'

class Partido extends React.Component {

  render() {
    // const { classes } = this.props
    return (
      <GridContainer>

        <p>fhasjh</p>

        <CustomTable
          title={'Partido fulano vs mengano'}
          subtitle={'Ranking'}
          color={'primary'}
          columns={['Posición', 'Nombre', 'Mail', 'Pts']}
          data={[
            ['1', 'nombre1', 'prode@test.com', '12'],
            ['2', 'nombre2', 'prode@test.com', '11'],
            ['3', 'nombre3', 'prode@test.com', '9'],
            ['4', 'nombre4', 'prode@test.com', '5']
          ]}
        />
      </GridContainer>
    )
  }
}

Partido.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Partido)
