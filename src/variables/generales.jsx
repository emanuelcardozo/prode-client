const eventMacth = {
  id: 1, tournament: 'CHAMPIONS LEAGUE', date: 'Mie 10/2, 15:30 PM', stage: 'Clasificación - Leg 2 of 2', stadium: 'San Paolo',
  home: { id: 1234, name: 'Napoli', img: 'https://ssl.gstatic.com/onebox/media/sports/logos/PWRLYBJqlGrAAsKkUN6eng_96x96.png' },
  away: { id: 4321, name: 'Liverpool', img: 'https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_96x96.png' }
}

const rowsTable =  [
  { name: 'Primera Falta', key: 'cb1' },
  { name: 'Primer tarjeta amarilla', key: 'cb2' },
  { name: 'Primer Lateral', key: 'cb3' },
  { name: 'Primer Corner', key: 'cb4' },
  { name: 'Primer disparo al arco', key: 'cb5' },
  { name: 'Primer Offside', key: 'cb5' }
]

module.exports = {
  eventMacth,
  rowsTable,
}
//image for tournament superliga
// http://futbolentrelineas.net/media/__sized__/uploads/calderonjairo88_4241_saf-superliga-argentina-2017-2018-logo-thumbnail-900x900-70.jpg

//libertadores
// https://e.ad.amtv.pe/futbol-mundial-copa-libertadores-2019-asi-quedaron-conformados-ocho-grupos-torneo-n361296-808x454-555237.jpg
