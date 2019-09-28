import React from "react";
import ReactDOM from "react-dom";

import Bmi from "./component/Bmi/Bmi";

function App() {
  return (
<Bmi className="col-5" />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
