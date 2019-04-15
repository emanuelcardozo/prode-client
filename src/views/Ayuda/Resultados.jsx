import React from 'react'
import One from '@material-ui/icons/LooksOne'
import Two from '@material-ui/icons/LooksTwo'
import List from '@material-ui/icons/List'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  onePoint: {
    color: '#f3f33b', margin: '-6px'
  },
  twoPoints: {
    color: '#4ead4e', margin: '-6px'
  },
  threePoints: {
    color: 'rgb(33, 150, 243)', margin: '-6px'
  },
  withoutPints: {
    color: '#ff7575', margin: '-6px'
  }
}

class Resultados extends React.Component {

  render() {
    const { classes } = this.props

    return (
      <div>
        <p>Una vez fianlizado el partido se podrán comparar los resultados.</p>
        <p>Dependiendo la cantidad de puntos obtenidos:<br />
           <One className={classes.withoutPints}/><Two className={classes.withoutPints}/>&nbsp;<strong> 0 puntos.</strong><br />
           <One className={classes.onePoint}/><Two className={classes.onePoint}/>&nbsp;<strong> 1 punto.</strong><br />
           <One className={classes.twoPoints}/><Two className={classes.twoPoints}/>&nbsp;<strong> 2 puntos.</strong><br />
           <One className={classes.threePoints}/><Two className={classes.threePoints}/>&nbsp;<strong> 3 puntos.</strong></p>
        <p>Una vez iniciado el partido podras consultar que resultado jugaron los demas competidos usando &nbsp;<List style={{ margin: '-7px' }}/>&nbsp; que figura debajo de cada partido.</p>
      </div>
    )
  }
}

export default withStyles(styles)(Resultados)
