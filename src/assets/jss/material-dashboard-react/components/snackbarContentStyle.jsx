import {
  primaryBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  greyBoxShadow
} from 'assets/jss/material-dashboard-react.jsx'

const snackbarContentStyle = {
  root: {
    position: 'relative',
    padding: '20px 15px',
    marginBottom: '20px',
    backgroundColor: 'white',
    color: '#555555',
    maxWidth: '100%'
  },
  top20: {
    top: '20px'
  },
  top40: {
    top: '40px'
  },
  info: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    color: '#ffffff',
    //...infoBoxShadow
  },
  success: {
    backgroundColor: '#5cb860',
    margin: '2px',
    maxWidth: '100%',
    color: '#ffffff',
    ...successBoxShadow
  },
  warning: {
    backgroundColor: '#ffa21a',
    color: '#ffffff',
    margin: '2px',
    maxWidth: '100%',
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: '#f55a4e',
    color: '#ffffff',
    ...dangerBoxShadow
  },
  primary: {
    backgroundColor: '#af2cc5',
    color: '#ffffff',
    ...primaryBoxShadow
  },
  grey: {
    backgroundColor: '#eb3573',
    color: '#ffffff',
    ...greyBoxShadow
  },
  message: {
    padding: '0',
    display: 'block',
    maxWidth: '89%'
  },
  close: {
    width: '11px',
    height: '11px'
  },
  iconButton: {
    width: '20px',
    height: '20px'
  },
  icon: {
    display: 'block',
    left: '15px',
    position: 'absolute',
    top: '50%',
    marginTop: '-15px',
    width: '30px',
    height: '30px'
  },
  infoIcon: {
    color: '#00d3ee'
  },
  successIcon: {
    color: '#5cb860'
  },
  warningIcon: {
    color: '#ffa21a'
  },
  dangerIcon: {
    color: '#f55a4e'
  },
  primaryIcon: {
    color: '#af2cc5'
  },
  greyIcon: {
    color: '#eb3573'
  },
  iconMessage: {
    paddingLeft: '50px',
    display: 'block'
  }
}

export default snackbarContentStyle
