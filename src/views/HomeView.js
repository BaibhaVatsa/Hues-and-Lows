import React from "react";
import InputView from "./InputView";
import ArrowLeftComponent from "../components/ArrowLeftComponent";
import AddButtonComponent from '../components/AddButtonComponent';
import ArrowRightComponent from "../components/ArrowRightComponent";
import DateComponent from "../components/DateComponent";
import PinWheelComponent from "../components/PinWheelComponent";
import PropTypes from "prop-types";
import { display } from "@material-ui/system";

export default class HomeView extends React.Component {
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
    );
  }
}
// PropTypes
HomeView.propTypes = {
  date: PropTypes.object.isRequired,
  dateBack: PropTypes.func.isRequired
};
