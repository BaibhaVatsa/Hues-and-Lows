import React from "react";
import InputView from "./InputView";
import ArrowLeftComponent from "../components/ArrowLeftComponent";
import AddButtonComponent from "../components/AddButtonComponent";
import ArrowRightComponent from "../components/ArrowRightComponent";
import DateComponent from "../components/DateComponent";
import PinWheelComponent from "../components/PinWheelComponent";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import {Spring} from 'react-spring/renderprops'


const HomeView = (props) => {
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

           <Spring
            from={{ opacity: 0 }}
             to={{ opacity: 1 }}>
             {propss =>  <div style={propss}>
             <DateComponent date={props.date} onClick={() => history.push("/calendar")}/>
             </div>} 
           </Spring> 

          <ArrowRightComponent dateForward={props.dateForward} />
        </div>
        <PinWheelComponent colors={["black", "white", "blue"]} />
        <AddButtonComponent />
      </React.Fragment>
    );
  // }
}
// PropTypes
// HomeView.propTypes = {
//   date: PropTypes.object.isRequired,
//   dateBack: PropTypes.func.isRequired,
//   dateForward: PropTypes.func.isRequired
// };

export default HomeView;