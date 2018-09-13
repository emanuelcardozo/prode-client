import React from 'react'
import PropTypes from 'prop-types'
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'
import withStyles from '@material-ui/core/styles/withStyles'

const style = {
  typo: {
    paddingLeft: '25%',
    marginBottom: '40px',
    position: 'relative'
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
function Ayuda(props) {
  const { classes } = props
  return (
    <Card>
      <CardHeader color='primary'>
        <h4 className={classes.cardTitleWhite}>Como juagar al ProdEvolution</h4>
        <p className={classes.cardCategoryWhite}>y desafiar a tus amigos</p>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>Paso 1</div>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Paso 2</div>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</p>
        </div>
      </CardBody>
    </Card>
  )
}

Ayuda.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(style)(Ayuda)
