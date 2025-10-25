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

    L.marker([40.441, -82.9]).addTo(map).bindPopup("OSU is here!").openPopup();
    /*L.marker([95, 30], { icon: redIcon })
      .addTo(map)
      .bindPopup("Another spot!")
      .openPopup(); */

    // Optional cleanup
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "500px", width: "500px" }}></div>;
};

export default Spot;
