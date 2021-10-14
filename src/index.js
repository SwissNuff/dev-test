import "./App.css";

import ReactDOM from "react-dom";
import React from "react";
import Counter from "./components/Counter";
import Fetcher from "./components/Fetcher";
import Profile from "./components/Profile";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Stage 1</Link>
            </li>
            <li>
              <Link to="/fetcher">Stage 2</Link>
            </li>
            <li>
              <Link to="/profile">Stage 3</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route path="/fetcher">
            <Fetcher />
          </Route>
          <Route path="/profile">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function ModalSwitch() {
  let location = useLocation();

  return (
    <div>
      <Switch location={location}>
        <Route exact path="/" children={<Counter />} />
        <Route path="/fetcher" children={<Fetcher />} />
        <Route path="/profile" children={<Profile />} />
      </Switch>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
