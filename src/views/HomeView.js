import React from "react";
import InputView from "./InputView";
import ArrowLeftComponent from "../components/ArrowLeftComponent";
import AddButtonComponent from "../components/AddButtonComponent";
import ArrowRightComponent from "../components/ArrowRightComponent";
import DateComponent from "../components/DateComponent";
import PinWheelComponent from "../components/PinWheelComponent";
import PropTypes from "prop-types";
import { display } from "@material-ui/system";

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true
    };
  }

  homePageStyle = () => {
    return {
      display: "flex",
      justifyContent: "center"
    };
  };

  pinWheelClicked() {
    const value = this.state.value;
    this.props.callbackFromParen(!value);
    this.setState({
      value: !value
    });
  };

  render() {
    return (
      <React.Fragment style={{ margin: "auto" }}>
        <div style={this.homePageStyle()}>
          <ArrowLeftComponent dateBack={this.props.dateBack} />
          <DateComponent date={this.props.date} />
          <ArrowRightComponent dateForward={this.props.dateForward} />
        </div>
        <PinWheelComponent entries={this.props.entries} onClick={pinWheelClicked} />
        <AddButtonComponent />
      </React.Fragment>
    );
  }
}
// PropTypes
HomeView.propTypes = {
  date: PropTypes.object.isRequired,
  dateBack: PropTypes.func.isRequired,
  dateForward: PropTypes.func.isRequired
};
