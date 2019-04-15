import React from 'react'

class Puntajes extends React.Component {

  render() {
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
      </div>
    )
  }
}

export default Puntajes
