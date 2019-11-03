import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeView from "./views/HomeView";
import CalendarView from "./views/CalendarView";
import DateComponent from "./components/DateComponent";
import "moment-timezone";
import moment from "moment";
import ListViewNoteComponent from "./components/ListViewNoteComponent";
import InputView from "./views/InputView";
import NotesView from "./views/NotesView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      entries: []
    };
  }

  changeDate = newDate => {
    this.setState({
      date: newDate
    });
  };

  dateBack = () => {
    let curDate = this.state.date;
    this.changeDate(new Date(curDate.setDate(curDate.getDate() - 1)));
  };

  sameDay = curDate => {
    let todaysDate = new Date();
    return (
      curDate.getDate() === todaysDate.getDate() &&
      curDate.getMonth() === todaysDate.getMonth() &&
      curDate.getFullYear() === todaysDate.getFullYear()
    );
  };

  dateForward = () => {
    let curDate = this.state.date;
    let todaysDate = new Date();

    if (
      !(
        curDate.getDate() >= todaysDate.getDate() &&
        curDate.getMonth() >= todaysDate.getMonth() &&
        curDate.getFullYear() >= todaysDate.getFullYear()
      )
    ) {
      this.changeDate(new Date(curDate.setDate(curDate.getDate() + 1)));
    }
  };

  // refetchDB = async () => {
  //   const newC = await fetch("https://127.0.0.1:8000/psuedoget", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json"
  //     },
  //     mode: "same-origin",
  //     // credentials: "same-origin",
  //     body: JSON.stringify({
  //       type: () => {if (this.sameDay(this.state.date)) { return 'today'; } else { return 'month'; }},
  //       data: () => {
  //         let curDate = this.state.date;
  //         return Number.toString(curDate.getDate()) + Number.toString(curDate.getMonth()) + Number.toString(curDate.getFullYear());
  //       }
  //     })
  //   });
  //   newC = JSON.parse(newC);
  //   console.log(newC);
  //   this.setState({
  //     entries: newC
  //   });
  // }

  updateDB = (newEvent) => {
    // await fetch("127.0.0.1:8000", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   mode: "same-origin",
    //   credentials: "same-origin",
    //   body: JSON.stringify({
    //     date: newEvent.date,
    //     time: newEvent.time,
    //     emotions: newEvent.emotions,
    //     notes: newEvent.notes
    //   })
    // });
    // this.refetchDB();
    console.log("hello bitch");
    this.setState({
      entries: this.state.entries.concat(newEvent)
    });
    console.log("bye bitch");
  }

  render() {
    return (
      //<DateComponent date={this.state.date} />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home">
              <HomeView
                date={this.state.date}
                dateBack={this.dateBack}
                dateForward={this.dateForward}
                entries={this.state.entries}
                updateDB={this.updateDB}
              />
            </Route>
            <Route path="/notes">
              {/* <NotesView /> */}
              <ListViewNoteComponent />
            </Route>
            <Route path="/calendar">
              <CalendarView
                date={this.state.date}
                changeDate={this.changeDate}
              />
            </Route>
            {/* <Route path="/input">
              <InputView updateDB={this.updateDB}/>
            </Route> */}
            <Redirect from="*" to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
