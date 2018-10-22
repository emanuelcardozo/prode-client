import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import Today from '@material-ui/icons/Today'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import Snackbar from '@material-ui/core/Snackbar'
import CardHeader from 'components/Card/CardHeader'
import GridContainer from 'components/Grid/GridContainer'
import withStyles from '@material-ui/core/styles/withStyles'
import SnackbarContent from 'components/Snackbar/SnackbarContent'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

import { stages } from 'variables/generales'

class Fechas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleClick(index) {
    const stage = { ...stages[index] }
    this.props.setBet({ obj: stage, type: 'matches'})
    this.setState({ open: true })
  }

  handleClose(event, reason) {
    if (reason === 'clickaway')
      return
    this.setState({ open: false })
  }

  render(){
    const { classes } = this.props

    return (
      <GridContainer>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose.bind(this)}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id="message-id">La fecha se agregó a Mi Timba</span>}
        />
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color='warning'>
              <h4 className={classes.cardTitleWhite}>Próximas Fechas</h4>
            </CardHeader>
            <CardBody>
              {stages.map((stage, index) => {
                return (
                  <div key={index} style={{ cursor: 'pointer' }}>
                    <SnackbarContent
                      message={stage.league + ' - Fecha: ' + stage.number}
                      color='success'
                      icon={Today}
                      click={this.handleClick.bind(this, index)}
                    />
                  </div>
                )
              })}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

Fechas.propTypes = {
  classes: PropTypes.object.isRequired,
  setBet: PropTypes.func
}

export default withStyles(dashboardStyle)(Fechas)
