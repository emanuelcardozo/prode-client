import Inicio from 'views/Inicio/Inicio.jsx'
import UserProfile from 'views/UserProfile/UserProfile.jsx'
import Torneos from 'views/Torneos/Torneos.jsx'
import Reglamento from 'views/Reglamento/Reglamento.jsx'
import Fechas from 'views/Fechas/Fechas.jsx'
import Timba from 'views/Timba/Timba.jsx'

import Torneo from 'views/Torneos/Torneo.jsx'

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
    path: '/reglamento',
    sidebarName: 'Reglas',
    navbarName: 'Reglamento',
    icon: 'library_books',
    component: Reglamento
  },
  {
    path: '/usuario',
    sidebarName: 'Usuario',
    navbarName: 'Usuario',
    icon: 'person',
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
