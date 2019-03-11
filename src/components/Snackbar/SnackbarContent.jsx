import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Snack from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import Save from '@material-ui/icons/Save'
import snackbarContentStyle from 'assets/jss/material-dashboard-react/components/snackbarContentStyle.jsx'

function SnackbarContent({ ...props }) {
  const { classes, message, color, save, icon, click, input } = props
  var action = []
  const messageClasses = classNames({ [classes.iconMessage]: icon !== undefined })
  if (save !== undefined) {
    action = [
      <div key={0}>
        <IconButton key='save' color='inherit' onClick={click}>
          <Save className={classes.iconButton} />
        </IconButton>
      </div>
    ]
  }
  return (
    <div>
      <Snack
        message={
          <div>
            {icon !== undefined ? <props.icon className={classes.icon} /> : null}
            <span className={messageClasses}>{message} {input}</span>
          </div>
        }
        classes={{
          root: classes.root + ' ' + classes[color],
          message: classes.message
        }}
        action={action}
      />
    </div>
  )
}

SnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'primary']),
  save: PropTypes.bool,
  icon: PropTypes.func,
  click: PropTypes.func
}

export default withStyles(snackbarContentStyle)(SnackbarContent)
