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
        <h1>Buckeye Flow</h1>
        <Spot />

      <h2>Libraries: </h2>
      <Liblist />
      </div>
    </>
  );
}

export default App;
