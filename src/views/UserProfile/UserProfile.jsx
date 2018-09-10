import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
//----icons----
import Email from "@material-ui/icons/Email";
import Account from "@material-ui/icons/AccountCircle";
import Grade from "@material-ui/icons/Grade";
import Money from "@material-ui/icons/MonetizationOn";
import AddMoney from "@material-ui/icons/AddShoppingCart";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function addMoney() {
  console.log("agregar balones de oro");
}

function UserProfile(props) {
  const { user } = props;

  return (
    <div>
      <GridContainer justify={"center"}>
        <GridItem xs={12} sm={12} md={8}>
          <Card profile>
            <CardAvatar profile style={{ width: "130px" }}>
              <img src={user.picture.data.url} alt="..." />
            </CardAvatar>
            <CardBody profile>
              <SnackbarContent
                message={"Nombre: " + user.name}
                icon={Account}
              />
              <SnackbarContent message={"E-mail: " + user.email} icon={Email} />
              <SnackbarContent
                message={"Ranking general: " + user.ranking}
                icon={Grade}
              />
              <SnackbarContent
                message={"Balones de oro: " + user.money}
                icon={Money}
              />
              <div onClick={addMoney} style={{ cursor: "pointer" }}>
                <SnackbarContent message={"Agregar balones"} icon={AddMoney} />
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(UserProfile);
