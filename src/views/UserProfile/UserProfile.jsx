import React from 'react'
import PropTypes from 'prop-types'
import SDK from 'library/SDK'
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
import Alias from '@material-ui/icons/InsertEmoticon'
import TextField from '@material-ui/core/TextField'

const styles = {
  logoutButton: {
    fontWeight: 500,
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '17px',
    borderRadius: '5px',
    padding: '10px',
    width: '120px',
    borderColor: 'transparent!important'
  },
  container: {
    marginTop: '30px'
  }
}

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { alias: props.user.alias }
    this.save = this.save.bind(this)
  }

  logout() {
    window.FB.logout()
    this.props.setUser(defaultState.user)
  }

  save() {
    const { user } = this.props
    const self = this
    const alias = document.getElementById('alias').value
    SDK.changeAlias(user.id, alias, user.accessToken, function(user) { self.props.setAlias(user) })
    this.setState({alias})
  }

  render() {
    const { classes, user } = this.props
    const { alias } = this.state

    const imput = (
      <TextField
       id="alias"
       label={alias}
       placeholder=""
       style={{ margin: '0px 0px -5px 20px', width: 'auto' }}
       fullWidth
       margin="normal"
       InputLabelProps={{
            shrink: true,
          }}
     />
    )

    return (
      <div className={classes.container}>
        <GridContainer justify={'center'} >
          <GridItem xs={12} sm={12} md={8}>
            <Card profile>
              <CardAvatar profile style={{ width: '130px' }}>
                <img src={user.picture.data.url} alt='...' />
              </CardAvatar>
              <CardBody>
                <SnackbarContent message={'Nombre: ' + user.name} icon={Account} />
                <SnackbarContent message={'E-mail: ' + user.email} icon={Email} />
                <SnackbarContent message="Alias: " icon={Alias} save={true} click={this.save} input={imput}/>
                <button onClick={this.logout.bind(this)} className={classes.logoutButton}>LOGOUT</button>
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


    // margin: 0px 0px -5px 20px;
    // width: auto;
