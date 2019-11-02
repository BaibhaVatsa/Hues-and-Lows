import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeView from "./views/HomeView";
import NotesView from "./views/NotesView";
import CalendarView from "./views/CalendarView";
import DateComponent from "./components/DateComponent";
import "moment-timezone";
import moment from "moment";

class App extends React.Component {
  state = {
    date: new Date()
  };
  render() {
    return (
      //<DateComponent date={this.state.date} />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
              <HomeView date={this.state.date} />
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
