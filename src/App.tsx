import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spot from "./components/Spot";
import Liblist from "./components/Liblist";

function App() {
  return (
    <>
      <div id="container">
        <div id="left-container">
          <h1>Buckeye Flow</h1>
          <Spot />
        </div>

        <div id="right-container">
          <h2>Libraries: </h2>
          <p>
            Here you can check to see the capacity of each library in the area.
          </p>
          <Liblist />
        </div>
      </div>

      <footer>
        <p>Made by team 146</p>
      </footer>
    </>
  );
}

export default App;
