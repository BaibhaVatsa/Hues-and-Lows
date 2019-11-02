import React, { Component } from "react";

import "moment-timezone";
import moment from "moment";
import PropTypes from "prop-types";

export class DateComponent extends Component {
  // state = {
  //   date: new Date()
  // };
  clockStyle = () => {
    return {
      display: "flex",
      flexWrap: "wrap",
      //justifyContent: "space-evenly",
      alignItems: "center",
      textAlign: "center",
      width: "75%",
      margin: "auto"
    };
  };

  dayStyle = () => {
    return {
      fontSize: "8rem",
      textAlign: "center",
      padding: "0rem",
      marginLeft: "20rem",
      color: "#507299"
    };
  };

  monthStyle = () => {
    return {
      fontSize: "8rem",
      textAlign: "center",
      marginLeft: "1.3rem"
    };
  };

  yearStyle = () => {
    return {
      fontSize: "8rem",
      textAlign: "center",
      marginLeft: "22rem",
      color: "#507299"
    };
  };

  render() {
    //const date = new Date();
    return (
      <div style={this.clockStyle()}>
        <div style={this.dayStyle()}>{this.props.date.getDate()}</div>
        {<div style={this.monthStyle()}>{moment().format("MMM")}</div>}
        <div style={this.yearStyle()}>{this.props.date.getFullYear()}</div>
      </div>
    );
  }
}

// PropTypes
DateComponent.propTypes = {
  date: PropTypes.object.isRequired
};

export default DateComponent;
