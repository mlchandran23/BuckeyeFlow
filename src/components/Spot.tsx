import React, { useEffect } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// base all the new icons based on the capacity of each library

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

const Spot = () => {
  useEffect(() => {
    // longitude and latitude of Ohio State University
    const map = L.map("map").setView([40.441, -82.9], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    //osu
    const osuMarker = L.marker([39.99955,  -83.01231])
    .addTo(map).bindPopup("OSU is here!")
    .openPopup();

    /*L.marker([95, 30], { icon: redIcon })
      .addTo(map)
      .bindPopup("Another spot!")
   */

    //thompson
    const thompMarker = L.marker([39.99923,  -83.01489])
    .addTo(map).bindPopup("Thompson!");


    //HSL
    const hslMarker = L.marker([39.99477,  -83.01710])
    .addTo(map).bindPopup("Health Sciences Library!");


    //18th Ave Library
    const aveMarker = L.marker([40.00163,  -83.01337])
    .addTo(map).bindPopup("18th Ave Library!");

    //Geology Library
    const geoMarker = L.marker([39.99839,  -83.01179])
    .addTo(map).bindPopup("Geology Library!");

    //Architecture Library
    const archMarker = L.marker([40.00374,  -83.01640])
    .addTo(map).bindPopup("Architecture Library!");

    //Fine arts Library
    const artsMarker = L.marker([40.00056,  -83.00897])
    .addTo(map).bindPopup("Fine Arts Library!");

    //FAES Library
    const faesMarker = L.marker([40.00511,  -83.02716])
    .addTo(map).bindPopup("FAES Library!");
    
    //Law Library
    const lawMarker = L.marker([39.99630,  -83.00827])
    .addTo(map).bindPopup("Law Library!");

    //Veterinary Medicine Library
    const vetMarker = L.marker([39.99945,  -83.02645])
    .addTo(map).bindPopup("Vet Library!");

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
  }, []);

  return <div id="map" style={{ height: "500px", width: "500px" }}></div>;
};

export default Spot;
