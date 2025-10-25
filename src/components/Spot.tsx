import React, {useEffect} from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

const Spot = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();

    // Optional cleanup
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default Spot;