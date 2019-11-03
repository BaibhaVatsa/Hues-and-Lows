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

  dateForward = () => {
    let curDate = this.state.date;
    let todaysDate = new Date();

    if (
      !(
        curDate.getDate() === todaysDate.getDate() &&
        curDate.getMonth() === todaysDate.getMonth() &&
        curDate.getFullYear() === todaysDate.getFullYear()
      )
    ) {
      this.setState({ date: new Date(curDate.setDate(curDate.getDate() + 1)) });
    }
  };

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
              />
            </Route>
            <Route path="/notes">
              <NotesView />
            </Route>
            <Route path="/calendar">
              <CalendarView date={this.state.date} changeDate={this.changeDate}/>
            </Route>
            <Redirect from="*" to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
