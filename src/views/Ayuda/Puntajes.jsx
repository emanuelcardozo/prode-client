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

class Puntajes extends React.Component {

  render() {
    const { classes } = this.props
    
    return (
      <div>
        <p>Modo <strong>Fecha</strong>.</p>
        <p>Se obtienen puntos de tres formas.<br />
          <strong>* 1 punto</strong> por acertar victoria de local, visitante ó empate.<br />
          <strong>* 1 punto</strong> por acertar los goles del local.<br />
          <strong>* 1 punto</strong> por acertar los goles del visitante.<br /></p>
        <p>Cada partido se puede modificar hasta el minuto anterior a que empiece, <strong>luego de esto no se computaran los cambios.</strong></p>
        <p>Durante la fecha podrás ver como cambia partido a partido la tabla de posiciones y saber si sos el campeón de la fecha.</p>
        <p>Modo <strong>Partido</strong>.<br />
          <strong>* 1 punto</strong> por acertar Local, Empate o Visitante.<br />
          <strong>* 1 punto</strong> por acertar los goles del local.<br />
          <strong>* 1 punto</strong> por acertar los goles del visitante.<br />
          <strong>* 1 punto</strong> por acertar quien realiza la primer falta.<br />
          <strong>* 1 punto</strong> por acertar quien obtiene la primer amarilla.<br />
          <strong>* 1 punto</strong> por acertar quien realiza el primer lateral.<br />
          <strong>* 1 punto</strong> por acertar quien realiza el primer corner.<br />
          <strong>* 1 punto</strong> por acertar quien realiza el primer disparo al arco.<br />
          <strong>* 1 punto</strong> por acertar quien realiza el primer offside.<br />
        </p>
        <div>
          <p>Una vez finalizado el partido se podrán comparar los resultados.</p>
          <p>Dependiendo la cantidad de puntos obtenidos:<br />
             <One className={classes.withoutPints}/><Two className={classes.withoutPints}/>&nbsp;<strong> 0 puntos.</strong><br />
             <One className={classes.onePoint}/><Two className={classes.onePoint}/>&nbsp;<strong> 1 punto.</strong><br />
             <One className={classes.twoPoints}/><Two className={classes.twoPoints}/>&nbsp;<strong> 2 puntos.</strong><br />
             <One className={classes.threePoints}/><Two className={classes.threePoints}/>&nbsp;<strong> 3 puntos.</strong></p>
          <p>Una vez iniciado el partido podras consultar que resultado jugaron los demas competidos usando &nbsp;<List style={{ margin: '-7px' }}/>&nbsp; que figura debajo de cada partido.</p>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Puntajes)
