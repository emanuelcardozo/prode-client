import React from 'react'
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

import { betsMatch } from 'variables/generales'

const styles = {
  titleContairner: {
    textAlign: 'center',
    marginTop: '10px'
  },
  versus: {
    marginLeft: '0px 15px'
  }
}

class Bets extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }

    this.getRows = this.getRows.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
  }

  handleClickOpen() { this.setState({ open: true }) }

  handleClose() { this.setState({ open: false }) }

  getRows() {
    if(betsMatch) {
      return betsMatch.bets.map( bet => {
        return [bet.name, bet.local.bet.toString(), '-', bet.visitant.bet.toString()]
      })
    }
    return [['No', 'hay', 'datos', 'disponibles']]
  }

  render(){
    const { classes, home, away, idToS } = this.props

    return (
      <GridContainer>
        <Button onClick={this.handleClickOpen}>
          Predicciones &nbsp; <List />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} scroll={'paper'}>
          <DialogContent>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <div className={classes.titleContairner}>
                  <img src={home.logo} alt='...' style={{ width: '15%' }} />
                  <strong className={classes.versus}> VS </strong>
                  <img src={away.logo} alt='...' style={{ width: '15%' }} />
                </div>
                <CardBody>
                  {this.state.open &&
                    <Table
                      tableHead={['Nombre', home.name, '', away.name]}
                      tableData={this.getRows(idToS)}
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
  idToS: PropTypes.string,
}

export default withStyles(styles)(Bets)
