import React from 'react'

class Puntajes extends React.Component {

  render() {
    return (
      <div>
        <p>Para jugar se deben cargar los goles de cada equipo, no es necesario cargar todos los partidos, pero si los goles de ambos equipos para poder jugar cada partido.</p>
        <p>Se obtienen puntajes por tres conceptos.<br />
          <strong>* 1 punto</strong> por acertar Local, Empate o Visitante.<br />
          <strong>* 1 punto</strong> por acertar los goles del local.<br />
          <strong>* 1 punto</strong> por acertar los goles del visitante.<br /></p>
        <p>Cada partido se puede modificar hasta el minuto anterior a que empieza.</p>
        <p>Durante la fecha podrás ver como cambia partido a partido la tabla de posiciones y saber si sos el campeón de la fecha.</p><br />
        <p>En el caso del modo <strong>Partido</strong>, los puntos adquiridos dependen de:<br />
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
        <p><strong>**Para guardar una predicción se deben seleccionar todas las categorias**</strong></p>
      </div>
    )
  }
}

export default Puntajes
