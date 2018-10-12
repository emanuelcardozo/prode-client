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
    num.focus()

    if(op === '+')
      num.stepUp()
    else
      num.stepDown()

    num.blur()
  }

  render(){
    const { classes, index, type } = this.props

    return(
      <div>
        <div>
          <Add onClick={this.handleChange.bind(this, '+')} className={classes.buttonStep} />
        </div>
        <Input
          id={type + index}
          type='number'
          defaultValue={0}
          inputProps={{ min: '0', max: '10' }}
          className={classes.inputField}
          onBlur={ _.debounce(this.props.sendBet.bind(this, index), 2000) }
        />
        <div>
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
