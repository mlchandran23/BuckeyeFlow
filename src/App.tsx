import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spot from "./components/Spot";
import Liblist from "./components/Liblist";

function App() {

const [occupants, setOccupants] = useState<number>(0);
const [maxCap, setMaxCap] = useState<number>(0);

const handleDataFromLiblist = (occ: number, max: number) => {
  setOccupants(occ);
  setMaxCap(max);
}

  return (
    <>
      <div id="container">
        <h1>Buckeye Flow</h1>
        <Spot occupants={occupants} maxCapacity={maxCap} />

      <h2>Libraries: </h2>
      <Liblist onDataChange={handleDataFromLiblist}/>
      </div>
    </>
  );
}

export default App;
