import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import Card from 'components/Card/Card.jsx'
import CardAvatar from 'components/Card/CardAvatar.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import defaultState from 'config/state'
import Email from '@material-ui/icons/Email'
import Account from '@material-ui/icons/AccountCircle'
// import Grade from '@material-ui/icons/Grade'
// import Money from '@material-ui/icons/MonetizationOn'
// import AddMoney from '@material-ui/icons/AddShoppingCart'

const styles = {
  logoutButton: {
    fontFamily: '"Helvetica","sans-serif"',
    fontWeight: 700,
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '20px',
    textTransform: 'uppercase',
    backgroundColor: '#4c69ba',
    borderRadius: '5px',
    border: '5px solid #4c69ba',
    padding: '15px'
  }
}

class UserProfile extends React.Component {

  logout() {
    window.FB.logout()
    this.props.setUser(defaultState.user)
  }

  render() {
    const { classes, user } = this.props

    return (
      <div>
        <GridContainer justify={'center'}>
          <GridItem xs={12} sm={12} md={8}>
            <Card profile>
              <CardAvatar profile style={{ width: '130px' }}>
                <img src={user.picture.data.url} alt='...' />
              </CardAvatar>
              <CardBody profile>
                <SnackbarContent
                  message={'Nombre: ' + user.name}
                  icon={Account}
                />
                <SnackbarContent message={'E-mail: ' + user.email} icon={Email} />
                {/*<SnackbarContent
                  message={'Ranking general: ' + user.ranking}
                  icon={Grade}
                />
                <SnackbarContent
                  message={'Balones de oro: ' + user.money}
                  icon={Money}
                />
                <div style={{ cursor: 'pointer' }}>
                  <SnackbarContent message={'Agregar balones'} icon={AddMoney} />
                </div>*/}
                <button onClick={this.logout.bind(this)} className={classes.logoutButton}>Logout</button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object,
  setUser: PropTypes.func
}

export default withStyles(styles)(UserProfile)
