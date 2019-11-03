import React from "react";
import "./Wheel.css";
import NotesView from "../views/NotesView";

class PinWheel extends React.Component {
  constructor(props) {
    super(props);
    let cs = ["red", "blue", "black"];
    if (this.props.entries.length !== 0) { 
        let entries = this.props.entries;
        for(var i = 0; i < entries.length; ++i) {
          let entry = entries[i].getEmotions();
          for(var j = 0; j < entry.length; ++j) {
            cs.push(entries[i][j].getColor());
          }
        }
      } else {
        cs.push("#ffffff");
    this.state = { colors: cs};
  }}

  // launchNotesView() {
  //   return <NotesView EntriesFromApp={this.props.entries} />;
  // }

  changeColors = (newColors) => {
    this.setState({
      colors: newColors
    });
  }

  componentDidMount() {
    this.updatePinWheel();
  }

  updatePinWheel() {
    let root = document.documentElement;
    root.style.setProperty("--colors", this.state.colors);
    console.log(root.style);
  }

  render() {
    return (
      <div>
        {/* <ul className="umbrella" onClick={this.launchNotesView}> */}
        {/*{this.state.colors.map((value, index) => <li key={index} className={`color ${value}`}></li>)} */}
        {/* </ul> */}
        <p className="conic">
          {/* Hello bois {this.state.colors.map((value, _) => console.log(value))} */}
        </p>
      </div>
    );
  }
}

export default PinWheel;
