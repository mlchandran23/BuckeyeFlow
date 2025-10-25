import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spot from "./components/Spot";

function App() {
  return (
    <>
      <div id="container">
        <h1>Buckeye Flow</h1>
        <Spot />
      </div>
    </>
  );
}

export default App;
