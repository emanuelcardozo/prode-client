import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'
import withStyles from '@material-ui/core/styles/withStyles'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import Puntajes from './Puntajes'
import Resultados from './Resultados'

const style = {
  root: {
   border: '1px solid rgba(0,0,0,.125)',
   boxShadow: 'none',
   '&:not(:last-child)': {
     borderBottom: 0,
   },
   '&:before': {
      display: 'none',
    },
  },
  expanded: {
   margin: 'auto',
  },
  typo: {
    paddingLeft: '25%',
    marginBottom: '40px',
    position: 'relative'
  },
  titleContainer: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
  },
  rulesTitles: {
    color: '#2196F3',
    margin: '0.5rem 0px'
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: '10px',
    color: '#c0c1c2',
    display: 'block',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    position: 'absolute',
    width: '260px'
  },
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    marginBottom: '3px',
    textDecoration: 'none'
  }
}

class Ayuda extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: '' }
  }

  handleChange = panel => (event, expanded) => {
     this.setState({
       expanded: expanded ? panel : false,
     });
   }

  render() {
    const { classes } = this.props
    const { expanded } = this.state

    return (
      <Card>
        <CardHeader className={classes.titleContainer}>
          <h4 className={classes.cardTitleWhite}>Como jugar al ProdEvolution</h4>
          <p className={classes.cardCategoryWhite}>Reglas y puntajes</p>
        </CardHeader>
        <CardBody>
          <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
          >
            <ExpansionPanelSummary style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
              <p className={classes.rulesTitles}>+ Puntajes</p>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Puntajes />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
          square
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
          >
            <ExpansionPanelSummary style={{ backgroundColor: 'rgba(0,0,0,.03)' }}>
              <p className={classes.rulesTitles}>+ Resultados</p>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Resultados />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          {/*<ExpansionPanel
          square
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
          >
            <ExpansionPanelSummary>
              <p className={classes.rulesTitles}>+ Posiciones y alias.</p>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <loquesea />
            </ExpansionPanelDetails>
          </ExpansionPanel>*/}
        </CardBody>
      </Card>
    )
  }
}

Ayuda.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Ayuda)
