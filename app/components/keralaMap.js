import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "../css/KeralaMap.css";

const KeralaMap = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const L = await import("leaflet");

        // Create map
        const map = L.map("kerala-map", {
          zoomControl: false,
        }).setView([10.85, 76.27], 7);

        // Add zoom control
        L.control.zoom({ position: "bottomright" }).addTo(map);

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // District FPO data
        const districtData = {
          "Thiruvananthapuram": { "FPO Count": 60 },
          "Kollam": { "FPO Count": 38 },
          "Pathanamthitta": { "FPO Count": 31 },
          "Alappuzha": { "FPO Count": 34 },
          "Kottayam": { "FPO Count": 44 },
          "Idukki": { "FPO Count": 74 },
          "Ernakulam": { "FPO Count": 59 },
          "Thrissur": { "FPO Count": 70 },
          "Palakkad": { "FPO Count": 61 },
          "Malappuram": { "FPO Count": 43 },
          "Kozhikode": { "FPO Count": 51 },
          "Wayanad": { "FPO Count": 46 },
          "Kannur": { "FPO Count": 29 },
          "Kasaragod": { "FPO Count": 24 },
        };

        // Load GeoJSON
        fetch("/kerala_districts.geojson")
          .then((res) => res.json())
          .then((data) => {
            L.geoJSON(data, {
              style: {
                color: "#1E3A8A",
                weight: 1.5,
                fillColor: "#60A5FA",
                fillOpacity: 0.5,
              },
              onEachFeature: (feature, layer) => {
                const districtName =
                  feature.properties.DISTRICT ||
                  feature.properties.district ||
                  "Unknown";

                const extraData = districtData[districtName] || {
                  "FPO Count": "N/A",
                };

                // Mouse events
                layer.on({
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      weight: 2,
                      fillColor: "#2563EB",
                      fillOpacity: 0.7,
                    });
                    layer.bringToFront();
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      weight: 1.5,
                      fillColor: "#60A5FA",
                      fillOpacity: 0.5,
                    });
                  },
                  click: () => {
                    map.fitBounds(layer.getBounds(), { padding: [30, 30] });
                    layer
                      .bindPopup(
                        `
                          <div class="popup-content">
                            <h3>${districtName}</h3>
                            <p><b>FPO Count:</b> ${extraData["FPO Count"]}</p>
                          </div>
                        `,
                        { className: "district-popup" }
                      )
                      .openPopup();
                  },
                });
              },
            }).addTo(map);
          })
          .catch((err) => console.error("Error loading GeoJSON:", err));
      })();
    }
  }, []);

  return <div id="kerala-map" style={{ height: "600px", width: "100%" }}></div>;
};

export default KeralaMap;
