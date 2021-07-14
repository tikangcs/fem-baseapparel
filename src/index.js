import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./App2";

export default function Index() {
  return <App2 />;
}

ReactDOM.render(<Index />, document.getElementById("root"));
