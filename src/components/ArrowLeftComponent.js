import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Fab from "@material-ui/core/Fab";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

class ArrowLeftComponent extends React.Component {
  constructor() {
    super();
    this.classes = makeStyles(theme => ({
      fab: {
        margin: theme.spacing(1)
      }
    }));
    // this.state.isClicked = false;
  }

  //   clicked() {
  //     this.setState({
  //       isClicked: true,
  //     //   this.props.dateBack.bind(this)
  //     });

  render() {
    return (
      <Fab
        size="large"
        aria-label="add"
        variant="extended"
        className={this.classes.fab}
        style={buttonstyle}
        // onClick={this.props.dateBack.bind(this, true)}
        onClick={this.props.dateBack}
      >
        <ArrowBackIosIcon />
      </Fab>
    );
  }
}

const buttonstyle = {
  //background: "#ffb6c1",
  background: "#f4f4f4",
  color: "#000000",
  cursor: "pointer",
  borderRadius: "50%",
  boxShadow: "none",
  margin: "auto",
  marginRight: "2rem"
};

// PropTypes
ArrowLeftComponent.propTypes = {
  dateBack: PropTypes.func.isRequired
};

export default ArrowLeftComponent;
