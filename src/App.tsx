import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spot from "./components/Spot";
import Liblist from "./components/Liblist";

function App() {

const Thompson = new Array(1000, 300, 80, 50, 25);
const Eighteenth = new Array(800, 80, 60, 30, 30);
const Architecture = new Array(400, 40, 40, 30, 10);
const FineArts = new Array(400, 10, 100, 30, 20);
const FAES = new Array(600, 200, 80, 50, 25);
const Geology = new Array(500, 65, 100, 46, 22);
const hsl = new Array(400, 85, 80, 50, 25);
const law = new Array(300, 85, 40, 25, 10);
const vet = new Array(200, 54, 20, 30, 15);  

const allOccupants = [
  Thompson[0],
  Eighteenth[0],
  Architecture[0],
  FineArts[0],
  FAES[0],
  Geology[0],
  hsl[0],
  law[0],
  vet[0],
];
const allMaxCapacities = [
  1000, 800, 400, 400, 600, 500, 400, 300,200,
];

  


  return (
    <>
      <div id="container">
        <h1>Buckeye Flow</h1>
        <Spot allOccupants={allOccupants} allMaxCapacities={allMaxCapacities} />

      <h2>Libraries: </h2>
      <Liblist />
      </div>
    </>
  );
}

export default App;
