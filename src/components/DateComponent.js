import React, { Component } from "react";
import { Link } from "react-router-dom";
import "moment-timezone";
import moment from "moment";
import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";

export class DateComponent extends Component {
  // state = {
  //   date: new Date()

  fullClockStyle = () => {
    return {
      textAlign: "center",
      margin: "auto"
    };
  };

  clockStyle = () => {
    return {
      display: "flex",
      justifyContent: "center"
    };
  };

  dayStyle = () => {
    return {
      fontSize: "6rem"
    };
  };

  monthStyle = () => {
    return {
      fontSize: "6rem",
      color: "#DcAE1D"
    };
  };

  yearStyle = () => {
    return {
      fontSize: "6rem",

      color: "#507299"
    };
  };

  // handleOnClick = () => {
  //   this.history.push("/calendar");
  // };
   months = {
      '1' : 'Jan',
      '2' : 'Feb',
      '3' : 'Mar',
      '4' : 'Apr',
      '5' : 'May',
      '6' : 'Jun',
      '7' : 'Jul',
      '8' : 'Aug',
      '9' : 'Sep',
      '10' : 'Oct',
      '11' : 'Nov',
      '12' : 'Dec'
  }
  

  render() {
    //const date = new Date();
    let curDate = this.props.date;
    console.log(curDate);
    return (
      <div style={this.fullClockStyle()}>
        <div style={this.clockStyle()}>
          <div style={this.monthStyle()}>{this.months[curDate.getMonth() + 1]}</div>
          <div style={this.dayStyle()}>{curDate.getDate()}</div>
        </div>
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
