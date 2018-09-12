import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/icons/Menu";
import Button from "components/CustomButtons/Button";
import Avatar from "@material-ui/core/Avatar";

import headerStyle from "assets/jss/material-dashboard-react/components/headerStyle.jsx";

function Header({ ...props }) {
  function makeBrand() {
    var name;
    props.routes.map(prop => {
      if (prop.path === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  const { classes, user } = props;

  // src={user.picture.data.url}

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Avatar
          alt=""
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  routes: PropTypes.array,
  handleDrawerToggle: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default withStyles(headerStyle)(Header);
