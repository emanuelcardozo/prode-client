import Ayuda from 'views/Ayuda/Ayuda'
// import Timba from 'views/Timba/Timba'
// import Fechas from 'views/Fechas/Fechas'
import Torneos from 'views/Torneos/Torneos'
import Partido from 'views/Eventos/Partido'
import UserProfile from 'views/UserProfile/UserProfile'

// import Stage from 'views/Fechas/Stage'
import Torneo from 'views/Torneos/Torneo'

const dashboardRoutes = [
  // {
  //   path: '/jugando',
  //   sidebarName: 'Jugando',
  //   navbarName: 'Jugando',
  //   icon: 'attach_money',
  //   component: Timba
  // },
  {
    path: '/torneos',
    sidebarName: 'Fechas',
    navbarName: 'Lista de Torneos',
    icon: 'fas fa-trophy',
    component: Torneos
  },
  // {
  //   path: '/fechas',
  //   sidebarName: 'Fechas',
  //   navbarName: 'Fechas disponibles',
  //   icon: 'calendar_today',
  //   component: Fechas
  // },
  {
    path: '/partido',
    sidebarName: 'Partido',
    navbarName: 'Próximo evento',
    icon: 'fas fa-futbol',
    component: Partido
  },
  {
    path: '/reglas',
    sidebarName: 'Reglas',
    navbarName: 'Ayuda',
    icon: 'fas fa-scroll',
    component: Ayuda
  },
  {
    path: '/usuario',
    sidebarName: 'Usuario',
    navbarName: 'Perfil de usuario',
    icon: 'fas fa-cogs',
    component: UserProfile
  },
  {
    path: '/torneo/:id/:stage',
    notDisplay: true,
    component: Torneo
  },
  // {
  //   path: '/fecha/:id',
  //   notDisplay: true,
  //   component: Stage
  // },
  { redirect: true, path: '/', to: '/torneos', navbarName: '' }
]

export default dashboardRoutes
