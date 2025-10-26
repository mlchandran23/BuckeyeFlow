import React, { useEffect } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// base all the new icons based on the capacity of each library

interface SpotProps {
  occupants: number;
  maxCapacity: number;
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

const Spot: React.FC<SpotProps> = ({ occupants, maxCapacity }) => {
  useEffect(() => {
    // longitude and latitude of Ohio State University
    const map = L.map("map").setView([40.00043,  -83.01803], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //credit
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

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
      { name: "OSU is here", coords: [39.99955,  -83.01231] },
    ];

    //array of markers
    const markers: L.Marker[] = []
    libraryLocations.forEach(lib => {
      //set marker for each location
      const marker = L.marker(lib.coords)
      .addTo(map)
      .bindPopup(`${lib.name}!`);
      markers.push(marker);

      const percentage = occupants / maxCapacity * 100;

      if(percentage > 66){
        marker.setIcon(redIcon);
      }else if(percentage > 33){
        marker.setIcon(yellowIcon);
      }else{
        marker.setIcon(greenIcon);
      }
      // //action listener:
      // marker.on("mouseover", (e: L.LeafletMouseEvent) => {
      //   marker.setIcon(greenIcon);
      // });

    });



    //open message "OSU is here!"
    markers[0].openPopup();

    for (let i = 0; i < markers.length; i++) {
      
    }

    //action listener to find coordinates easier
    map.on("click", (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      L.popup()
        .setLatLng(e.latlng)
        .setContent(`Coordinates:<br>Latitude: ${lat.toFixed(5)}<br>Longitude: ${lng.toFixed(5)}`)
        .openOn(map);
    });

    // Optional cleanup
    return () => {
      map.remove();
    };
  }, [occupants, maxCapacity]);

  return <div id="map" style={{ height: "500px", width: "500px" }}></div>;
};

export default Spot;
