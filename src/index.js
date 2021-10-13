import "./App.css";

import ReactDOM from "react-dom";
import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
