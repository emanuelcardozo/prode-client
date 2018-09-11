import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import GridItem from 'components/Grid/GridItem.jsx'
import GridContainer from 'components/Grid/GridContainer'
import Table from 'components/Table/Table'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody'
import Button from 'components/CustomButtons/Button'
import Video from '@material-ui/icons/VideogameAsset'
import classNames from 'classnames'

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF'
    }
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1'
    }
  },
  buttonIcon: {
    display: 'flex',
    justifyContent: 'end'
  }
}

function getLeaguesTable(leagues) {
  const data = []
  leagues.forEach( team => {
    data.push([team.position.toString(), team.teamName, team.wins.toString(), team.losses.toString(), team.draws.toString(), team.points.toString()])
  })
  return data
}

function TorneosDos(props) {
  const { classes, leagues } = props

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color='success' style={{ height: 100 }}>
            <h4 className={classes.cardTitleWhite}>{leagues.leagueCaption}</h4>
            <p className={classes.cardCategoryWhite}>{'Fecha: ' + leagues.matchday}</p>
            <div className={classes.buttonIcon}>
              <Button variant='fab' size='lg' color='transparent' className={classes.button}>
                <Video className={classNames(classes.rightIcon, classes.iconMedium)} />
                Jugar
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor='gray'
              tableHead={['Posición', 'Equipo', 'PG', 'PP', 'PE', 'Pts']}
              tableData={getLeaguesTable(leagues.standing)}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}

TorneosDos.propTypes = {
  classes: PropTypes.object.isRequired,
  leagues: PropTypes.object
}

export default withStyles(styles)(TorneosDos)
