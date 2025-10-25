import React, { useState } from "react";

const ToggleList = () => {
    const [isVis, setIsVis] = useState(false);

    const handleToggle = () => {
        setIsVis(!isVis);
    }

    return (
        <div> 
            <button onClick={handleToggle}>
                {isVis ? "-" : "+"}
            </button>
            {isVis && (
             <ul>
              <li>Cap: <progress id = "progressbar" value="70" max="100"></progress> 70%</li>
              <li>Indivdual Workspaces available: 25/200</li>
              <li>2 Person Workspaces: 12/50</li>
              <li>4 Person Workspaces: 8/50</li>
              <li>5+ Person Workspaces: 3/20</li>
             </ul>
            )}
        </div>
    );


};

export default ToggleList
