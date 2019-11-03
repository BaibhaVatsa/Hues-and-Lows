import React from "react";
import Calendar from "react-calendar";
import { useHistory } from "react-router-dom";

const CalendarComponent = props => {
  let history = useHistory();

  let calendarStyle = () => {
    return {
      width: "25%",
      margin: "auto"
    };
  };
  return (
    <div style={calendarStyle()}>
      <Calendar
        onChange={date => {
          props.changeDate(date);
          history.replace("/home");
        }}
        value={props.date}
      />
    </div>
  );
};

export default CalendarComponent;
