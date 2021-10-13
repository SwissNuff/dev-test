import "./App.css";

import ReactDOM from "react-dom";
import React from "react";
import Counter from "./components/Counter";
import Fetcher from "./components/Fetcher";

const App = () => {
  return (
    <div>
      <Counter />
      <Fetcher />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
