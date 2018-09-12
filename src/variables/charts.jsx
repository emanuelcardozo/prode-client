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
  {id: 1, name: 'Primera Division - Argentina', dateMatch: '5'},
  {id: 2, name: 'UEFA CHAMPIONS LEAGUE', dateMatch: 'Clasificacion - Etapa 1'},
  {id: 3, name: 'Copa Argentina', dateMatch: '32avos'},
  {id: 4, name: 'Primera Division - Argentina', dateMatch: '5'},
  {id: 5, name: 'Primera Division - Argentina', dateMatch: '5'},
  {id: 6, name: 'Primera Division - Argentina', dateMatch: '5'},
  {id: 7, name: 'Primera Division - Argentina', dateMatch: '5'},
  {id: 8, name: 'Primera Division - Argentina', dateMatch: '5'},
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

module.exports = {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  leagues,
  tournamentsBet,
  matchesBet
}
