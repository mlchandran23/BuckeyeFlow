import React, { useEffect, useRef } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// base all the new icons based on the capacity of each library

interface SpotProps {
  allOccupants: number[];
  allMaxCapacities: number[];
}

const createBaseIcon = (color: string) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

const redIcon = createBaseIcon("red");
const yellowIcon = createBaseIcon("yellow");
const greenIcon = createBaseIcon("green");


const Spot: React.FC<SpotProps> = ({ allOccupants, allMaxCapacities }) => {
  const mapRef = useRef<L.Map | null>(null);

  //useEffect for initialization
  useEffect(() => {
  if (mapRef.current) return;

  if (L.DomUtil.get("map") !== null) {
    L.DomUtil.get("map")!.innerHTML = "";
  }

  const map = L.map("map").setView([40.00043, -83.01803], 15);
  mapRef.current = map;

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
  }, []);

  //useEffect for if data changes
  useEffect(() => {
    const interval = setInterval(() => {
    const map = mapRef.current;
    if (!map) return;

    map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    //array for library locations
    const libraryLocations: { name: string; coords: [number, number] }[] = [
      { name: "Thompson Library", coords: [39.99923, -83.01489] },
      { name: "18th Ave Library", coords: [40.00163,  -83.01337] },
      { name: "Architecture Library", coords: [40.00374,  -83.01640] },
      { name: "Fine Arts Library", coords: [40.00056,  -83.00897] },
      { name: "FAES Library", coords: [40.00511,  -83.02716] },
      { name: "Geology Library", coords: [39.99839,  -83.01179] },
      { name: "Health Sciences Library", coords: [39.99477, -83.01710] },
      { name: "Law Library", coords: [39.99630,  -83.00827] },
      { name: "Veterinary Medicine Library", coords: [39.99945,  -83.02645] },
      
    ];

    const percentage: number[] = [];

    for(let i = 0; i < allMaxCapacities.length; i++){
      percentage[i] = allOccupants[i] / allMaxCapacities[i] * 100;
    }

    let count = 0;
    //array of markers
    const markers: L.Marker[] = []
    libraryLocations.forEach(lib => {
      //set marker for each location
      const marker = L.marker(lib.coords)
      .addTo(map)
      .bindPopup(`${lib.name}!`);
      markers.push(marker);

      if(percentage[count] > 66){
        marker.setIcon(redIcon);
      }else if(percentage[count] > 33){
        marker.setIcon(yellowIcon);
      }else{
        marker.setIcon(greenIcon);
      }

      count++;
    });


    }, 3); // 5 seconds

  return () => clearInterval(interval);
  }, [allOccupants, allMaxCapacities]);

  return <div id="map" style={{ height: "500px", width: "500px" }}></div>;
};

export default Spot;
