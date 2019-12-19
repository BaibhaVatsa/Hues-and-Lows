import React from "react";
import PinWheelComponent from "../components/PinWheelComponent";
import DateComponent from "../components/DateComponent";

type HomeViewProps = {
  date: Date;
};

const HomeView: React.FC<HomeViewProps> = (props: HomeViewProps) => {
  return (
    <div>
      <DateComponent date={props.date}></DateComponent>

      <PinWheelComponent
        handleClick={() => alert("clicked!")}
        colours={["#d0c9d6", "#000000", "#787878"]}
      ></PinWheelComponent>
    </div>
  );
};

export default HomeView;
