const message = (state = [], action) => {
  var obj = {}

  switch (action.type) {
  case 'SET_MSG':
    obj['open'] = !state.open
    if(!action.msg)
      obj['msg'] = ""
    else if (action.msg.first_offside)
      obj['msg'] = "Partido Guardado."
    else
      obj['msg'] = "No fue posible guardar el partido."
    return ({ ...obj })

  default:
    return state
  }
}

export default message
