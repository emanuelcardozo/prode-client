import { successColor } from 'assets/jss/material-dashboard-react.jsx'

const dashboardStyle = {
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
    margin: '0px 30px',
    alignItems: 'center',
    textAlignLast: 'end',
    '&:before, &:after': {
      content: 'none'
    }
  },
  buttonStep: {
    color: 'green',
    cursor: 'pointer',
    width: '40px',
    height: '40px'
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    width: '70px',
    height: '40px',
    borderRadius: '25px',
    '&:hover': {
      color: 'black'
    }
  },
  inputRadio: {
    display: 'inline-block',
    width: '25px',
    height: '25px',
    cursor: 'pointer'
  },
  tableCell: {
    textAlign: 'center'
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
    fontSize: '90px',
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
    letterSpacing: '10px'
  }
}

export default dashboardStyle
