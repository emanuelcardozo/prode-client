import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import CardHeader from 'components/Card/CardHeader'
import GridContainer from 'components/Grid/GridContainer'
import SnackbarContent from 'components/Snackbar/SnackbarContent'
import Snackbar from '@material-ui/core/Snackbar'
import Video from '@material-ui/icons/VideogameAsset'
import withStyles from '@material-ui/core/styles/withStyles'

import { leagues } from 'variables/charts'

const styles = {
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  }
}

class Torneos extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }

    this.handleClose = this.handleClose.bind(this)
  }

  handleClick(index) {
    const tournament = { ...leagues[index] }
    this.props.setBet({ obj: tournament, type: 'tournaments'})
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
          onClose={this.handleClose}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id="message-id">El torneo se agregó a Mi Timba</span>}
        />
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color='success'>
              <h4 className={classes.cardTitleWhite}>Torneos</h4>
            </CardHeader>
            <CardBody>
              {leagues.map((league, index) => {
                return (
                  <div key={index} style={{ cursor: 'pointer' }}>
                    <SnackbarContent
                      message={league.name + ' - ' + league.dateMatch}
                      color='warning'
                      icon={Video}
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

Torneos.propTypes = {
  classes: PropTypes.object.isRequired,
  leagues: PropTypes.object,
  setBet: PropTypes.func
}

export default withStyles(styles)(Torneos)
