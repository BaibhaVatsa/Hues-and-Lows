import React, { Component } from "react";
import { Link } from "react-router-dom";
import "moment-timezone";
import moment from "moment";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export class DateComponent extends Component {
  // state = {
  //   date: new Date()

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
      marginLeft: "5rem",
      color: "#507299"
    };
  };

  // handleOnClick = () => {
  //   this.history.push("/calendar");
  // };

  render() {
    //const date = new Date();
    return (
      <Link to="/calendar" style={{ textDecoration: "none" }}>
        <div style={this.clockStyle()}>
          <div style={this.dayStyle()}>{this.props.date.getDate()}</div>
          <div style={this.monthStyle()}>{moment().format("MMM")}</div>
        </div>
        <div style={this.yearStyle()}>{this.props.date.getFullYear()}</div>
      </Link>
    );
  }
}

// PropTypes
DateComponent.propTypes = {
  date: PropTypes.object.isRequired
};

export default DateComponent;
