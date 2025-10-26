import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spot from "./components/Spot";
import Liblist from "./components/Liblist";

function App() {

const [allOccupants, setAllOccupants] = useState<number[]>([]);
const [allMaxCapacities, setAllMaxCapacities] = useState<number[]>([]);

const handleDataFromLiblist = (libraryIndex:number, occupants: number, max: number) => {
  setAllOccupants(prev => {
    const newArr = [...prev];
    newArr[libraryIndex] = occupants;
    return newArr;
  });

  setAllMaxCapacities(prev => {
    const newArr = [...prev];
    newArr[libraryIndex] = max;
    return newArr;
  });
};

  return (
    <>
      <div id="container">
        <h1>Buckeye Flow</h1>
        <Spot allOccupants={allOccupants} allMaxCapacities={allMaxCapacities} />

      <h2>Libraries: </h2>
      <Liblist onDataChange={handleDataFromLiblist}/>
      </div>
    </>
  );
}

export default App;
