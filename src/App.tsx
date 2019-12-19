import React, { useState, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
// import CalendarView from './views/CalendarView';
import HomeView from "./views/HomeView";
// import NotesView from './views/NotesView';
// import InputView from './views/InputView';
import WelcomeView from "./views/WelcomeView";

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<WelcomeView />}>
          <Switch>
            <Route path="/home">
              <HomeView date={date} />
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
            <Redirect from="*" to="/home" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;

serviceWorker.register();
