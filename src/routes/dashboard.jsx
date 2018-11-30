// import Ayuda from 'views/Ayuda/Ayuda'
// import Timba from 'views/Timba/Timba'
// import Fechas from 'views/Fechas/Fechas'
import Torneos from 'views/Torneos/Torneos'
// import Partido from 'views/Eventos/Partido'
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
    sidebarName: 'Torneos',
    navbarName: 'Lista de Torneos',
    icon: 'content_paste',
    component: Torneos
  },
  // {
  //   path: '/fechas',
  //   sidebarName: 'Fechas',
  //   navbarName: 'Fechas disponibles',
  //   icon: 'calendar_today',
  //   component: Fechas
  // },
  // {
  //   path: '/eventos',
  //   sidebarName: 'Eventos',
  //   navbarName: 'Próximo evento',
  //   icon: 'dashboard',
  //   component: Partido
  // },
  // {
  //   path: '/ayuda',
  //   sidebarName: 'Ayuda',
  //   navbarName: 'Ayuda',
  //   icon: 'help_outline',
  //   component: Ayuda
  // },
  {
    path: '/usuario',
    sidebarName: 'Usuario',
    navbarName: 'Perfil de usuario',
    icon: null,
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
