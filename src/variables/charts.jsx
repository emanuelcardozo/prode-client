// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require('chartist')

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500
var delays2 = 80,
  durations2 = 500

// ##############################
// // // Daily Sales
// #############################

const dailySalesChart = {
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[12, 17, 7, 17, 23, 18, 38]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        })
      } else if (data.type === 'point') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        })
      }
    }
  }
}

// ##############################
// // // Email Subscriptions
// #############################

const emailsSubscriptionChart = {
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 1000,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0]
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === 'bar') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        })
      }
    }
  }
}

// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {
  data: {
    labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        })
      } else if (data.type === 'point') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        })
      }
    }
  }
}

const leagues = [
  {id: 1, name: 'SUPER LIGA ARGENTINA', dateMatch: '5', amount: 8, position: 1, img: 'https://viapais.com.ar/media/cache/resolve/small/https://viapais.com.ar/files/2018/05/20180505010321_32587604_0_body.jpg'},
  {id: 2, name: 'UEFA CHAMPIONS LEAGUE', dateMatch: 'Clasificacion - Etapa 1', amount: 12, position: 1, img: 'https://i.ytimg.com/vi/t0r0KJe4L6U/maxresdefault.jpg'},
  {id: 3, name: 'COPA ARGENTINA', dateMatch: '16avos', amount: 5, positon: 3, img: 'https://www.infobae.com/new-resizer/qE8J5Kv0baDbSObVIG7PglvTfmA=/600x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/11173736/Copa-Argentina-2.jpg'},
  {id: 4, name: 'COPA LIBERTADORES', dateMatch: '4tos', amount: 250, position: 1, img: 'https://prod.media.libero.pe/660x378/libero/imagen/2018/05/21/noticia-copa-libertadores-2018.jpg'},
  {id: 5, name: 'SUPER LIGA ARGENTINA', dateMatch: '5', amount: 8, position: 1, img: 'https://viapais.com.ar/media/cache/resolve/small/https://viapais.com.ar/files/2018/05/20180505010321_32587604_0_body.jpg'},
  {id: 6, name: 'UEFA CHAMPIONS LEAGUE', dateMatch: 'Clasificacion - Etapa 1', amount: 12, position: 1, img: 'https://i.ytimg.com/vi/t0r0KJe4L6U/maxresdefault.jpg'},
  {id: 7, name: 'COPA ARGENTINA', dateMatch: '16avos', amount: 5, positon: 3, img: 'https://www.infobae.com/new-resizer/qE8J5Kv0baDbSObVIG7PglvTfmA=/600x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/11173736/Copa-Argentina-2.jpg'},
  {id: 8, name: 'COPA LIBERTADORES', dateMatch: '4tos', amount: 250, position: 1, img: 'https://prod.media.libero.pe/660x378/libero/imagen/2018/05/21/noticia-copa-libertadores-2018.jpg'},
]

const tournamentsBet = [
  {id: 1, name: 'UEFA CHAMPIONS LEAGUE', img: 'https://i.ytimg.com/vi/t0r0KJe4L6U/maxresdefault.jpg', amount: 12, dateMatch: '1', position: 1},
  {id: 2, name: 'SUPER LIGA ARGENTINA', img: 'https://viapais.com.ar/media/cache/resolve/small/https://viapais.com.ar/files/2018/05/20180505010321_32587604_0_body.jpg', amount: 8, dateMatch: '5', position: 1},
  {id: 3, name: 'COPA LIBERTADORES', img: 'https://prod.media.libero.pe/660x378/libero/imagen/2018/05/21/noticia-copa-libertadores-2018.jpg', amount: 250, dateMatch: '4tos', position: 1},
]

const matchesBet = [
  {id: 1, homeTeam: 'Barcelona FC', imgHome: 'http://www.escudosdefutbolyequipaciones.com/images_esc3/ESPA/CATALU%D1A/escudos_min/MIN_ESC_F.C.%20BARCELONA.png', homeBet: 3,
    awayTeam: 'Arsenal', imgAway: 'https://ugc.kn3.net/i/origin/http://lh4.ggpht.com/_gHhBxs3JECA/TO7EInnjZhI/AAAAAAAAALc/dhysgzqUE_I/Arsenal.png', awayBet: 1, dateMatch: '23-Sep-2018 12hs'
  },
  {id: 2, homeTeam: 'Rosario Central', imgHome: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43ojccMoq2TFldz_63CeElbcUq9Zx-ZVE9th6eUimeNn2oN6DeA', homeBet: 2,
    awayTeam: 'Newell old boys', imgAway: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Newell%27s_escudo_2016.png/170px-Newell%27s_escudo_2016.png', awayBet: 1, dateMatch: '23-Sep-2018 12hs'
  },
  {id: 3, homeTeam: 'Brasil', imgHome: 'https://icon2.kisspng.com/20180401/yoq/kisspng-dream-league-soccer-brazil-national-football-team-brazil-5ac0e6fe0363c2.1059782515225914860139.jpg', homeBet: 0,
    awayTeam: 'Argentina', imgAway: 'https://vignette.wikia.nocookie.net/logopedia/images/9/90/AFA_logo_%282014%29.png/revision/latest?cb=20150803000338', awayBet: 1, dateMatch: '23-Sep-2018 12hs'
  },
]

const league = [
  { schedule: { dayOfWeek: 'Vie.,', date: '31/8', hour: 'Fin' }, local: { name: 'Argentinos Jrs.', goals: 2 }, visitant: { name: 'Lanús', goals: 0 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Vie.,', date: '31/8', hour: 'Fin' }, local: { name: 'San Martín', goals: 1 }, visitant: { name: 'Huracán', goals: 2 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '1/9', hour: 'Fin' }, local: { name: 'Defensa y Justicia', goals: 1 }, visitant: { name: 'Belgrano', goals: 1 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '1/9', hour: 'Fin' }, local: { name: 'Banfield', goals: 1 }, visitant: { name: 'Patronato', goals: 0 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '1/9', hour: 'Fin' }, local: { name: 'Talleres', goals: 1 }, visitant: { name: 'Godoy Cruz', goals: 0 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '1/9', hour: 'Fin' }, local: { name: 'San Lorenzo', goals: 1 }, visitant: { name: 'River Plate', goals: 1 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Dom.,', date: '2/9', hour: 'Fin' },local: { name: 'Racing', goals: 2 }, visitant: { name: 'Rosario Central', goals: 0 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Dom.,', date: '2/9', hour: 'Fin' }, local: { name: 'Estudiantes', goals: 2 }, visitant: { name: 'Independiente', goals: 2 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Dom.,', date: '2/9', hour: 'Fin' }, local: { name: 'Aldosivi', goals: 0 }, visitant: { name: 'Tigre', goals: 2 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Dom.,', date: '2/9', hour: 'Fin' }, local: { name: 'Colón', goals: 0 }, visitant: { name: 'Unión', goals: 0 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Dom.,', date: '2/9', hour: 'Fin' }, local: { name: 'Boca Juniors', goals: 3 }, visitant: { name: 'Vélez', goals: 0 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Lun.,', date: '3/9', hour: 'Fin' }, local: { name: 'Newell\'s', goals: 1 }, visitant: { name: 'Atlético Tucumán', goals: 2 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Lun.,', date: '3/9', hour: 'Fin' }, local: { name: 'San Martín de Tucumán', goals: 1 }, visitant: { name: 'Gimnasia', goals: 1 }, state: 'Finished' },
  { schedule: { dayOfWeek: 'Vie.,', date: '14/9', hour: '19:00' }, local: { name: 'Estudiantes' }, visitant: { name: 'Aldosivi' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Vie.,', date: '14/9', hour: '21:00' }, local: { name: 'Atlético Tucumán' }, visitant: { name: 'Tigre' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '15/9', hour: '13:15' }, local: { name: 'Independiente' }, visitant: { name: 'Colón' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '15/9', hour: '15:30' }, local: { name: 'River Plate' }, visitant: { name: 'San Martín' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '15/9', hour: '17:45' }, local: { name: 'Belgrano' }, visitant: { name: 'Newell\'s' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '15/9', hour: '20:00' }, local: { name: 'Argentinos Jrs.' }, visitant: { name: 'Boca Juniors' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '16/9', hour: '11:00' }, local: { name: 'Patronato' }, visitant: { name: 'Gimnasia' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '16/9', hour: '13:15' }, local: { name: 'Vélez' }, visitant: { name: 'San Martín de Tucumán' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '16/9', hour: '15:30' }, local: { name: 'Unión' }, visitant: { name: 'Talleres' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '16/9', hour: '17:45' }, local: { name: 'Lanús' }, visitant: { name: 'Racing' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '16/9', hour: '20:00' }, local: { name: 'Godoy Cruz' }, visitant: { name: 'San Lorenzo' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Lun.,', date: '17/9', hour: '19:00' }, local: { name: 'Huracán' }, visitant: { name: 'Banfield' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Lun.,', date: '17/9', hour: '21:00' }, local: { name: 'Rosario Central' }, visitant: { name: 'Defensa y Justicia' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Vie.,', date: '21/9', hour: '19:00' }, local: { name: 'San Lorenzo' }, visitant: { name: 'Patronato' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Vie.,', date: '21/9', hour: '21:00' }, local: { name: 'Colón' }, visitant: { name: 'Godoy Cruz' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '22/9', hour: '13:15' }, local: { name: 'Newell\'s' }, visitant: { name: 'Lanús' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '22/9', hour: '15:30' }, local: { name: 'Talleres' }, visitant: { name: 'Vélez' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '22/9', hour: '17:45' }, local: { name: 'Defensa y Justicia' }, visitant: { name: 'Estudiantes' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Sáb.,', date: '22/9', hour: '20:00' }, local: { name: 'Banfield' }, visitant: { name: 'Independiente' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '23/9', hour: '11:00' }, local: { name: 'San Martín de Tucumán' }, visitant: { name: 'Argentinos Jrs.' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '23/9', hour: '11:00' }, local: { name: 'Tigre' }, visitant: { name: 'Huracán' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '23/9', hour: '13:15' }, local: { name: 'San Martín' }, visitant: { name: 'Atlético Tucumán' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '23/9', hour: '13:15' }, local: { name: 'Gimnasia' }, visitant: { name: 'Rosario Central' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Dom.,', date: '23/9', hour: '17:45' }, local: { name: 'Boca Juniors' }, visitant: { name: 'River Plate' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Lun.,', date: '24/9', hour: '19:00' }, local: { name: 'Aldosivi' }, visitant: { name: 'Belgrano' }, state: 'Pending' },
  { schedule: { dayOfWeek: 'Lun.,', date: '24/9', hour: '21:00' }, local: { name: 'Racing' }, visitant: { name: 'Unión' }, state: 'Pending' },
  { schedule: { dayOfWeek: '28/9', date: '18:45', hour: undefined }, local: { name: 'Independiente' }, visitant: { name: 'Tigre' }, state: 'Pending' }
]


module.exports = {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  leagues,
  tournamentsBet,
  matchesBet,
  league
}
