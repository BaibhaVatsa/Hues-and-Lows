import React from "react";
import PropType from "prop-types";
import CSS from "csstype";

type DateComponentProps = {
  date: Date;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const dateStyle: CSS.Properties = {
  display: "grid",
  margin: "auto",
  fontSize: "5rem",
  gridTemplateRows: "auto auto"
};

const dayMonthStyle: CSS.Properties = {
  display: "grid",
  margin: "auto",
  gridTemplateColumns: "auto auto",
  gridColumnGap: "5px"
};

const DateComponent: React.FC<DateComponentProps> = (
  props: DateComponentProps
) => {
  return (
    <div onClick={props.handleClick} style={dateStyle}>
      <div style={dayMonthStyle}>
        <div>{props.date.getDate()}</div>
        <div style={{ color: "#DcAE1D" }}>
          {props.date.toLocaleString("default", { month: "short" })}
        </div>
      </div>
      <div style={{ color: "#507299" }}>{props.date.getFullYear()}</div>
    </div>
  );
};

DateComponent.propTypes = {
  date: PropType.instanceOf(Date).isRequired
  // TODO add handleClick
};

export default DateComponent;
