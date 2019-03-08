import React from 'react'
import SDK from 'library/SDK'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import Table from 'components/Table/Table'
import List from '@material-ui/icons/List'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import GridContainer from 'components/Grid/GridContainer'
import DialogContent from '@material-ui/core/DialogContent'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  titleContairner: {
    textAlign: 'center',
    marginTop: '10px'
  },
  versus: {
    marginLeft: '0px 15px'
  }
})

class Bets extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false, data: [] }

    this.getRows = this.getRows.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
  }

  handleClickOpen() { this.setState({ open: true }) }

  handleClose() { this.setState({ open: false }) }

  componentDidUpdate(prevProps, prevState) {
    if(!prevState.open && this.state.open) {
      const self = this
      const { idTournament, idStage, idMatch, accessToken } = self.props
      SDK.getBetsOfMatch(idTournament, idStage, idMatch, accessToken, function(response) { self.setState({ data: self.getRows(response)}) })
    }
  }

  getRows(data) {
    return data.map( bet => {
      return [ bet.user_name, bet.home_goals.toString(), '-', bet.away_goals.toString() ]
    })
  }

  render(){
    const { classes, home, away } = this.props

    return (
      <GridContainer>
        <Button onClick={this.handleClickOpen}>
          <List />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} scroll={'paper'}>
          <DialogContent>
            <GridItem>
              <Card>
                <div className={classes.titleContairner}>
                  <img src={home.logo.large} alt='...' style={{ width: '15%' }} />
                  <strong className={classes.versus}> VS </strong>
                  <img src={away.logo.large} alt='...' style={{ width: '15%' }} />
                </div>
                <CardBody>
                  {this.state.open &&
                    <Table
                      tableHead={['Nombre', home.name, '', away.name]}
                      tableData={this.state.data}
                    />}
                </CardBody>
              </Card>
            </GridItem>
          </DialogContent>
        </Dialog>
      </GridContainer>
    )
  }
}

Bets.propTypes = {
  classes: PropTypes.object.isRequired,
  setBet: PropTypes.func,
  home: PropTypes.object,
  away: PropTypes.object,
  idTournament: PropTypes.string,
  idStage: PropTypes.string,
  idMatch: PropTypes.string
}

export default withStyles(styles)(Bets)
