import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import CalendarView from './views/CalendarView';
import HomeView from './views/HomeView';
import NotesView from './views/NotesView';
import InputView from './views/InputView';

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
          <Route path="/input">
            <InputView />
          </Route>
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
