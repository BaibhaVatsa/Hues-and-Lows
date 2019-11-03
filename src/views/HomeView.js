import React from "react";
import InputView from "./InputView";
import ArrowLeftComponent from "../components/ArrowLeftComponent";
import ArrowRightComponent from "../components/ArrowRightComponent";
import DateComponent from "../components/DateComponent";
import PinWheelComponent from "../components/PinWheelComponent";
import PropTypes from "prop-types";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false
    };
  }

  handleClick() {
    const value = !this.state.click;
    this.props.PinwheelClick(value);
  }

  render() {
    return (
      <div>
        <ArrowLeftComponent />
        <DateComponent date={this.props.date} />
        <PinWheelComponent
          EntriesFromApp={this.props.EntriesFromApp}
          onClick={this.handleClick}
        />
        <ArrowRightComponent />
        <InputView />
      </div>
    );
  }
}
// PropTypes
HomeView.propTypes = {
  date: PropTypes.object.isRequired
};
