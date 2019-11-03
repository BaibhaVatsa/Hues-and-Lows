import React from "react";
import InputView from "./InputView";
import ArrowLeftComponent from "../components/ArrowLeftComponent";
import ArrowRightComponent from "../components/ArrowRightComponent";
import DateComponent from "../components/DateComponent";
import PinWheelComponent from "../components/PinWheelComponent";
import PropTypes from "prop-types";
import { display } from "@material-ui/system";

export default class HomeView extends React.Component {
<<<<<<< HEAD
  homePageStyle = () => {
    return {
      display: "flex",
      justifyContent: "center"
    };
  };

  render() {
    return (
      <React.Fragment style={{ margin: "auto" }}>
        <div style={this.homePageStyle()}>
          <ArrowLeftComponent dateBack={this.props.dateBack} />
          <DateComponent date={this.props.date} />

          <ArrowRightComponent />
        </div>
        <PinWheelComponent colors={["black", "white", "blue"]} />
        <AddButtonComponent />
      </React.Fragment>
=======
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
>>>>>>> 697244e047a7f932527090dbb19e463921067305
    );
  }
}
// PropTypes
HomeView.propTypes = {
  date: PropTypes.object.isRequired,
  dateBack: PropTypes.func.isRequired
};
