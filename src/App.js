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
  state = {
    date: new Date(),
    enties: []
  };

  dateBack = () => {
    let curDate = this.state.date;
    this.setState({ date: new Date(curDate.setDate(curDate.getDate() - 1)) });
  };
  render() {
    return (
      //<DateComponent date={this.state.date} />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home">
              <HomeView date={this.state.date} dateBack={this.dateBack} />
            </Route>
            <Route path="/notes">
              <NotesView />
            </Route>
            <Route path="/calendar" component={CalendarView}>
              {/* <CalendarView /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
