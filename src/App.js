import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomeView from './views/HomeView';
import NotesView from './views/NotesView';
import CalendarView from './views/CalendarView';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <HomeView />
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

export default App;
