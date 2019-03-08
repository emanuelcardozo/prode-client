import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = theme => ({
  grid: {
    padding: "0 15px"
  },
  [theme.breakpoints.down("sm")]: {
    grid: {
      padding: "0px !important"
    }
  }
});

function GridItem({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
