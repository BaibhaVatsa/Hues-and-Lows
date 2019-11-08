import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
// import CalendarView from './views/CalendarView';
import HomeView from './views/HomeView';
// import NotesView from './views/NotesView';
// import InputView from './views/InputView';
import WelcomeView from './views/WelcomeView';


const App: React.FC = () => {
  const [date, setDate] = useState(Date());

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/welcome">
            <WelcomeView />
          </Route>
          <Route path="/home">
            <HomeView />
          </Route>
          <Route path="/notes">
            {/* TODO directly open popup for Notes */}
            {/* <NotesView /> */}
          </Route>
          <Route path="/calendar">
            {/* TODO directly open popup for Calendar */}
            {/* <CalendarView /> */}
          </Route>
          <Route path="/input">
            {/* TODO directly open popup for Input */}
            {/* <InputView /> */}
          </Route>
          <Redirect from="*" to="/welcome" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

serviceWorker.register();