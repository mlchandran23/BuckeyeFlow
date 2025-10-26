import React, { useEffect } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// base all the new icons based on the capacity of each library

interface SpotProps {
  occupants: number;
  maxCapacity: number;
}

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Spot: React.FC<SpotProps> = ({ occupants, maxCapacity }) => {
  useEffect(() => {
    // longitude and latitude of Ohio State University
    const map = L.map("map").setView([40.00043,  -83.01803], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //credit
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    //array for Markers
    const markers = [];

    //osu
    const osuMarker = L.marker([39.99955,  -83.01231])
    .addTo(map).bindPopup("OSU is here!")
    .openPopup();
    
    markers.push(osuMarker);

    //thompson
    const thompMarker = L.marker([39.99923,  -83.01489])
    .addTo(map).bindPopup("Thompson!");

    markers.push(thompMarker);

    //HSL
    const hslMarker = L.marker([39.99477,  -83.01710])
    .addTo(map).bindPopup("Health Sciences Library!");

    markers.push(hslMarker);

    //18th Ave Library
    const aveMarker = L.marker([40.00163,  -83.01337])
    .addTo(map).bindPopup("18th Ave Library!");

    markers.push(aveMarker);

    //Geology Library
    const geoMarker = L.marker([39.99839,  -83.01179])
    .addTo(map).bindPopup("Geology Library!");

    markers.push(geoMarker);

    //Architecture Library
    const archMarker = L.marker([40.00374,  -83.01640])
    .addTo(map).bindPopup("Architecture Library!");

    markers.push(archMarker);

    //Fine arts Library
    const artsMarker = L.marker([40.00056,  -83.00897])
    .addTo(map).bindPopup("Fine Arts Library!");

    markers.push(artsMarker);

    //FAES Library
    const faesMarker = L.marker([40.00511,  -83.02716])
    .addTo(map).bindPopup("FAES Library!");

    markers.push(faesMarker);
    
    //Law Library
    const lawMarker = L.marker([39.99630,  -83.00827])
    .addTo(map).bindPopup("Law Library!");

    markers.push(lawMarker);

    //Veterinary Medicine Library
    const vetMarker = L.marker([39.99945,  -83.02645])
    .addTo(map).bindPopup("Veterinary Medicine Library!");

    markers.push(vetMarker);

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
