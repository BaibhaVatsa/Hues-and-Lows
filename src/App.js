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
import InputView from './views/InputView';

function App() {
  return (
    <Router>
      <div className="App">
        <InputView />
      </div>
    </Router>
  );
}

export default App;
