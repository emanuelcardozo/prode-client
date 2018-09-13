import Inicio from 'views/Inicio/Inicio'
import UserProfile from 'views/UserProfile/UserProfile'
import Torneos from 'views/Torneos/Torneos'
import Ayuda from 'views/Ayuda/Ayuda'
import Fechas from 'views/Fechas/Fechas'
import Timba from 'views/Timba/Timba'

import Torneo from 'views/Torneos/Torneo'

const dashboardRoutes = [
  {
    path: '/inicio',
    sidebarName: 'Inicio',
    navbarName: 'Inicio',
    icon: 'dashboard',
    component: Inicio
  },
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
  { redirect: true, path: '/', to: '/inicio', navbarName: '' }
]

export default dashboardRoutes
