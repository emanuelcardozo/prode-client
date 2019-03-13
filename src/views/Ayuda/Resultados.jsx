import React from 'react'
import Star from '@material-ui/icons/Star'
import List from '@material-ui/icons/List'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  strong: {
    color: 'green'
  },
  oneStar: {
    color: '#e5e4e2', width: '20px'
  },
  twoStar: {
    color: '#cd7f32', width: '20px'
  },
  threeStar: {
    color: 'gold', width: '20px'
  }
}

class Resultados extends React.Component {

  render() {
    const { classes } = this.props

    return (
      <div>
        <p>Una vez fianlizado el partido se podrán comparar los resultados de los partidos.</p>
        <p>Cada acierto se visualizara en color <strong className={classes.strong}>verde</strong> y dependiendo la cantidad de puntos obtenidos se visualizara una estrella.<br />
           <Star className={classes.oneStar} /> <strong> 1 punto</strong><br />
           <Star className={classes.twoStar} /> <strong> 2 punto</strong><br />
           <Star className={classes.threeStar} /> <strong> 3 punto</strong></p>
        <p>Una vez iniciado el partido podras consultar que resultado jugaron los demas competidos usando  <List />  que figura debajo de cada partido.</p>
      </div>
    )
  }
}

export default withStyles(styles)(Resultados)
