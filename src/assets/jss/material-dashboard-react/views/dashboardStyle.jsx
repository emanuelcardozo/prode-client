import { successColor } from 'assets/jss/material-dashboard-react.jsx'

const dashboardStyle = theme => ({
  successText: {
    color: successColor
  },
  upArrowCardCategory: {
    width: '16px',
    height: '16px'
  },
  stats: {
    color: '#999999',
    display: 'inline-flex',
    fontSize: '12px',
    lineHeight: '22px',
    '& svg': {
      top: '4px',
      width: '16px',
      height: '16px',
      position: 'relative',
      marginRight: '3px',
      marginLeft: '3px'
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      top: '4px',
      fontSize: '16px',
      position: 'relative',
      marginRight: '3px',
      marginLeft: '3px'
    }
  },
  cardCategory: {
    color: '#999999',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    paddingTop: '10px',
    marginBottom: '0'
  },
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitle: {
    color: '#3C4858',
    marginTop: '5px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontWeight: '400',
      lineHeight: '1'
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
      fontWeight: '400',
      lineHeight: '1'
    }
  },
  footer: {
    width: '100%',
    height: '35px',
    background: 'transparent',
    display: 'inline-flex'
  },
  container: {
    minHeight: '81vh',
    overflow: 'hidden',
    display: 'block',
    position: 'relative',
  },
  cover: {
    width: '80px',
    height: '80px',
    margin: '20px 10px'
  },
  line: {
    width: '100%',
    height: '5px',
    border: 'none',
    backgroundColor: '#EEEEEE'
  },
  paperContainer: {
    boxShadow: 'unset!important'
  },
  betPaperContainer: {
    boxShadow: 'unset!important',
    display: 'inline-flex'
  },
  chevron: {
    cursor: 'pointer',
    width: '30px !important',
    height: '30px !important'
  },
  inputField: {
    height: '30%',
    minWidth: '15px',
    color: 'black !important',
    fontWeight: '500',
    margin: '0px 30px',
    '&:before, &:after': {
      content: 'none'
    }
  },
  buttonStep: {
    color: '#2196F3',
    cursor: 'pointer',
    width: '40px',
    height: '40px'
  },
  button: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    width: '90px',
    height: '40px',
    borderRadius: '10px'
  },
  inputRadio: {
    display: 'inline-block',
    width: '25px',
    height: '25px',
    cursor: 'pointer'
  },
  tableCell: {
    textAlign: 'center',
    padding: '4px 20px 4px 20px'
  },
  selectOptions: {
    cursor: 'pointer',
    width: '40px',
    height: '30px',
    fontSize: '15px',
    border: 'none',
    backgroundColor: 'white'
  },
  headerTitle: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  headerTeams: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center'
  },
  headerGoals: {
    fontSize: '70px',
    alignSelf: 'center',
    marginBottom: '30px'
  },
  tournamentContainer: {
    backgroundPosition: 'center'
  },
  tournamentTitle: {
    color: 'white',
    fontSize: '20px',
    fontWeight: '700'
  },
  stagesConteiner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  stage: {
    width: '30px',
    height: '30px',
    margin: '5px',
    cursor: 'pointer'
  },
  betsGoals: {
    minWidth: '220px',
    fontSize: '2.825em',
    fontWeight: '350',
    letterSpacing: '10px'
  },
  resultGoals: {
    margin: '0px',
    letterSpacing: '2px',
    fontWeight: '500'
  },
  commonDiv: {
    width: 'fit-content',
    margin: '0px'
  },
  imgAway: {
    marginLeft: '70px'
  },
  imgHome: {
    marginRight: '70px'
  },
  [theme.breakpoints.down("sm")]: {
    cover: {
      width: '50px',
      height: '50px',
      margin: '20px 0px'
    },
    cardTitle: {
      fontSize: '12px'
    },
    buttonStep: {
      width: '30px'
    },
    inputField: {
      margin: '0px 15px'
    },
    betsGoals: {
      margin: '0px',
      minWidth: '100px',
      fontSize: '25px',
      textAlign: 'center'
    },
    imgAway: {
      margin: '10px'
    },
    imgHome: {
      margin: '10px'
    },
    tableHead: {
      display: 'none'
    },
    card: {
      marginTop: '0px'
    }
  }
})

export default dashboardStyle
