import React, { useEffect, useState } from "react";
import  createLibrary from "./Library";
import Spot from "./Spot";

type LibraryType = ReturnType<typeof createLibrary>;

interface ToggleListProps {
    libraryIndex: number;
    maxValues: number[];
    onDataChange?: (libraryIndex: number, occupants: number, max: number) => void;
}

const ToggleList: React.FC<ToggleListProps> = ({ libraryIndex, maxValues, onDataChange }) => {
    const [isVis, setIsVis] = useState(false);
    const [libraries, setLibraries] = useState<LibraryType[]>([]);

    

    useEffect(() => {
        async function loadLibraries() {
            try {
                const response = await fetch("/data/libraries.txt");
                const text = await response.text();

                const lines = text.split("\n").filter(line => line.trim() !== "");

                const libs = lines.map(line => {
                    const [occupants, single, two, four, fivePlus] = line.split(",").map(num => parseInt(num.trim(), 10));

                    return createLibrary(occupants, single, two, four, fivePlus);
                });

                setLibraries(libs);
            } catch (err) {
                console.error("Error loading libraries", err);
            }
        }

        loadLibraries();
    }, []);

    const handleToggle = () => {
        setIsVis(!isVis);
    }
    
    const selectedLibrary = libraries[libraryIndex];

    useEffect(() => {
        if (selectedLibrary && onDataChange) {
            onDataChange(libraryIndex, selectedLibrary.occupants, maxValues[0]);
        }
    }, [selectedLibrary, maxValues, onDataChange, libraryIndex])

    return (
        <div> 
            <button onClick={handleToggle}>
                {isVis ? "-" : "+"}
            </button>

            {isVis && selectedLibrary &&(
             <ul>
              <li>Cap: <progress id = "progressbar" value= {selectedLibrary.occupants} max={maxValues[0]}></progress></li>
              <li>Indivdual Workspaces in use: {selectedLibrary.singlePersonTables}/{maxValues[1]}</li>
              <li>2 Person Workspaces in use: {selectedLibrary.twoPersonTables}/{maxValues[2]}</li>
              <li>4 Person Workspaces in use: {selectedLibrary.fourPersonTables}/{maxValues[3]}</li>
              <li>5+ Person Workspaces in use: {selectedLibrary.fivePlusPersonTables}/{maxValues[4]}</li>
             </ul>
            )}

        </div>
    );


};

export default ToggleList
