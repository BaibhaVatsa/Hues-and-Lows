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
<<<<<<< HEAD
  state = {
    date: new Date()
  };

  dateBack = () => {
    let curDate = this.state.date;
    this.setState({ date: new Date(curDate.setDate(curDate.getDate() - 1)) });
  };
=======
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

>>>>>>> 697244e047a7f932527090dbb19e463921067305
  render() {
    return (
      //<DateComponent date={this.state.date} />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
<<<<<<< HEAD
              <HomeView date={this.state.date} dateBack={this.dateBack} />
=======
              <HomeView EntriesFromApp={this.state.entries} />
>>>>>>> 697244e047a7f932527090dbb19e463921067305
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
