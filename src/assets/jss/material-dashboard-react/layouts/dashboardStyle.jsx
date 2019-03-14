import {
  drawerWidth,
  transition
} from "assets/jss/material-dashboard-react.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  player: {
    display: "none"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    padding: "15px",
    minHeight: "calc(100vh - 80px)",
    [theme.breakpoints.down("md")]: {
      marginBottom: '60px',
      padding: "0px 15px"
    }
  },
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
