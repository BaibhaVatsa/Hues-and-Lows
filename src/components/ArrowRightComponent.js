import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

class ArrowRightComponent extends React.Component {
  constructor() {
    super();
    this.classes = makeStyles(theme => ({
      fab: {
        margin: theme.spacing(1)
      }
    }));
    this.isClicked = false;
  }

  clicked() {
    this.setState({
      isClicked: true
    });
  }

  render() {
    return (
      <Fab
        size="large"
        aria-label="add"
        variant="extended"
        className={this.classes.fab}
        style={buttonstyle}
        onClick={this.props.dateForward}
      >
        <ArrowForwardIosIcon />
      </Fab>
    );
  }
}

const buttonstyle = {
  background: "#f4f4f4",
  color: "#000000",
  borderRadius: "50%",
  cursor: "pointer",
  boxShadow: "none",
  margin: "auto",
  marginLeft: "2rem"
};

// PropTypes
ArrowRightComponent.propTypes = {
  date: PropTypes.object.isRequired,
  dateForward: PropTypes.func.isRequired
};

export default ArrowRightComponent;
