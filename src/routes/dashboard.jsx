import Ayuda from 'views/Ayuda/Ayuda'
import Timba from 'views/Timba/Timba'
import Inicio from 'views/Inicio/Inicio'
import Fechas from 'views/Fechas/Fechas'
import Torneos from 'views/Torneos/Torneos'
import UserProfile from 'views/UserProfile/UserProfile'

import Stage from 'views/Fechas/Stage'
import Torneo from 'views/Torneos/Torneo'

const dashboardRoutes = [
  {
    path: '/timba',
    sidebarName: 'Mi timba',
    navbarName: 'Mi Timba',
    icon: 'attach_money',
    component: Timba
  },
  {
    path: '/torneos',
    sidebarName: 'Torneos',
    navbarName: 'Lista de Torneos',
    icon: 'content_paste',
    component: Torneos
  },
  {
    path: '/fechas',
    sidebarName: 'Fechas',
    navbarName: 'Fechas',
    icon: 'calendar_today',
    component: Fechas
  },
  {
    path: '/ayuda',
    sidebarName: 'Ayuda',
    navbarName: 'Ayuda',
    icon: 'help_outline',
    component: Ayuda
  },
  {
    path: '/inicio',
    sidebarName: 'Inicio',
    navbarName: 'Inicio',
    icon: 'dashboard',
    component: Inicio
  },
  {
    path: '/usuario',
    sidebarName: 'Usuario',
    navbarName: 'Usuario',
    icon: 'account_circle',
    component: UserProfile
  },
  {
    path: '/torneo/:id',
    notDisplay: true,
    component: Torneo
  },
  {
    path: '/fecha/:id',
    notDisplay: true,
    component: Stage
  },
  { redirect: true, path: '/', to: '/inicio', navbarName: '' }
]

export default dashboardRoutes
