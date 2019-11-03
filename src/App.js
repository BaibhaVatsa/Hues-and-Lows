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
import NotesView from './views/NotesView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      entries: fetch,
    };
  }

  pinwheelClick(value) {
    this.setState.entries({
      entries: fetch
    });
  }

  render() {
    return (
      //<DateComponent date={this.state.date} />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
              <HomeView EntriesFromApp={this.state.entries} />
            </Route>
            <Route path="/notes">
              <NotesView />
            </Route>
            <Route path="/calendar">
              <CalendarView />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
