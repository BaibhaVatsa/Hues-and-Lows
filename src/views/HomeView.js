import React from "react";
import ArrowLeftComponent from "../components/ArrowLeftComponent";
import AddButtonComponent from "../components/AddButtonComponent";
import InputView from "../views/InputView";
import ArrowRightComponent from "../components/ArrowRightComponent";
import DateComponent from "../components/DateComponent";
import PinWheelComponent from "../components/PinWheelComponent";
import { useHistory } from "react-router-dom";
import CustomizedDialogs from "../components/ListViewNoteComponent";

const HomeView = props => {
  let history = useHistory();

  let homePageStyle = () => {
    return {
      display: "flex",
      justifyContent: "center"
    };
  };

  // render() {
  return (
    <React.Fragment style={{ margin: "auto" }}>
      <div style={homePageStyle()}>
        <ArrowLeftComponent dateBack={props.dateBack} />
        <DateComponent
          date={props.date}
          onClick={() => history.push("/calendar")}
        />
        <ArrowRightComponent dateForward={props.dateForward} />
      </div>
      {/* <PinWheelComponent EntriesfromT /> */}
      <CustomizedDialogs entries={props.entries}/>

      <InputView updateDB={props.updateDB} />
    </React.Fragment>
  );
  // }
};
// PropTypes
// HomeView.propTypes = {
//   date: PropTypes.object.isRequired,
//   dateBack: PropTypes.func.isRequired,
//   dateForward: PropTypes.func.isRequired
// };

export default HomeView;
