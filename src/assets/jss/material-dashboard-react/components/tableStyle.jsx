import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  greyColor,
  grayColor,
  defaultFont
} from 'assets/jss/material-dashboard-react.jsx'

const tableStyle = theme => ({
  warningTableHeader: {
    color: warningColor
  },
  primaryTableHeader: {
    color: primaryColor
  },
  dangerTableHeader: {
    color: dangerColor
  },
  successTableHeader: {
    color: successColor
  },
  infoTableHeader: {
    color: infoColor
  },
  greyTableHeader: {
    color: greyColor
  },
  grayTableHeader: {
    color: grayColor
  },
  table: {
    marginBottom: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse'
  },
  tableHeadCell: {
    color: 'inherit',
    ...defaultFont,
    fontSize: '1em'
  },
  tableCell: {
    ...defaultFont,
    textAlign: 'center',
    lineHeight: '1.42857143',
    padding: '12px 8px',
    verticalAlign: 'middle'
  },
  firstCell: {
    ...defaultFont,
    textAlign: 'center',
    lineHeight: '1.42857143',
    padding: '12px 8px',
    color: 'black',
    fontWeight: '500',
    verticalAlign: 'middle'
  },
  tableResponsive: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  }
})

export default tableStyle
