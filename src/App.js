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
import InputView from "./views/InputView"
import NotesView from "./views/NotesView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      entries: [],
    };
  }

  changeDate = (newDate) => {
    this.setState({
      date: newDate
    });
  }

  dateBack = () => {
    let curDate = this.state.date;
    this.setState({ date: new Date(curDate.setDate(curDate.getDate() - 1)) });
  };

  sameDay = (curDate) => {
    let todaysDate = new Date();
    return curDate.getDate() === todaysDate.getDate() && curDate.getMonth() === todaysDate.getMonth() && curDate.getFullYear() === todaysDate.getFullYear()
  }

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
      this.setState({ date: new Date(curDate.setDate(curDate.getDate() + 1)) });
    }
  };

  refetchDB = async () => {
    const newC = await fetch("http://127.0.0.1:8000", {
      method: "GET",
      credentials: "same-origin",
      body: JSON.stringify({
        type: () => {if (this.sameDay(this.state.date)) { return 'today'; } else { return 'month'; }},
        data: () => {}
      })
    });
    newC = JSON.parse(newC);
    console.log(newC);
    this.setState({
      entries: newC
    });
  }

  updateDB = async () => {
    await fetch();
    refetchDB();
  }

  render() {
    const entries = this.state.entries;
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
                entriesFromServer={entries}
                updateDB={this.updateDB}
              />
            </Route>
            <Route path="/notes">
              <NotesView />
            </Route>
            <Route path="/calendar">
              <CalendarView date={this.state.date} changeDate={this.changeDate}/>
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
