import React from "react";
import AddButtonComponent from "../components/AddButtonComponent";
import ArrowLeftComponent from "../components/ArrowLeftComponent";
import ArrowRightComponent from "../components/ArrowRightComponent";
import DateComponent from "../components/DateComponent";
import PinWheelComponent from "../components/PinWheelComponent";
import PropTypes from "prop-types";

export default class HomeView extends React.Component {
  render() {
    return (
      <div>
        <ArrowLeftComponent />
        <DateComponent date={this.props.date} />
        <PinWheelComponent colors={["black", "white", "blue"]} />
        <ArrowRightComponent />
        <AddButtonComponent />
      </div>
    );
  }
}
// PropTypes
HomeView.propTypes = {
  date: PropTypes.object.isRequired
};
