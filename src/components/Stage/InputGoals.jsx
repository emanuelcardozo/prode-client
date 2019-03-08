import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import Add from '@material-ui/icons/AddCircle'
import Remove from '@material-ui/icons/RemoveCircle'
import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle'

class InputGoals extends React.Component {

  handleChange(op) {
    const { index, type } = this.props
    const num = document.getElementById(type + index)

    if(op === '+')
      num.stepUp()
    else
      num.stepDown()

    num.disabled = false
    num.focus()
    num.blur()
    num.disabled = true
  }

  render(){
    const { classes, index, type, matches } = this.props
    var side = type === 'local' ? matches[index].bet_home : matches[index].bet_away

    return(
      <div className={classes.commonDiv}>
        <div className={classes.commonDiv}>
          <Add onClick={this.handleChange.bind(this, '+')} className={classes.buttonStep} />
        </div>
        <Input
          id={type + index}
          type='number'
          disabled
          defaultValue={side}
          inputProps={{ min: '0', max: '9' }}
          className={classes.inputField}
          onBlur={ _.debounce(this.props.sendBet.bind(this, index), 2000) }
        />
        <div className={classes.commonDiv}>
          <Remove onClick={this.handleChange.bind(this, '-')} className={classes.buttonStep} />
        </div>
      </div>
    )
  }
}

InputGoals.propTypes = {
  classes: PropTypes.object,
  index: PropTypes.number,
  sendBet: PropTypes.func,
  type: PropTypes.string
}

export default withStyles(dashboardStyle)(InputGoals)
