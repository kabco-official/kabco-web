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

        L.control.zoom({ position: "bottomright" }).addTo(map);

        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // District data (Population as per 2011 Census, Area in km²)
        const districtData = {
          "Thiruvananthapuram": { population: 3301427, area: 2192 },
          "Kollam": { population: 2629703, area: 2491 },
          "Pathanamthitta": { population: 1195537, area: 2652 },
          "Alappuzha": { population: 2127789, area: 1415 },
          "Kottayam": { population: 1974551, area: 2203 },
          "Idukki": { population: 1108974, area: 4356 },
          "Ernakulam": { population: 3279860, area: 3068 },
          "Thrissur": { population: 3110327, area: 3032 },
          "Palakkad": { population: 2810892, area: 4480 },
          "Malappuram": { population: 4112920, area: 3550 },
          "Kozhikode": { population: 3086293, area: 2345 },
          "Wayanad": { population: 817420, area: 2132 },
          "Kannur": { population: 2525637, area: 2966 },
          "Kasaragod": { population: 1302600, area: 1992 },
        };

        // Load Kerala districts
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
                  population: "N/A",
                  area: "N/A",
                };

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
                          <p><b>Population:</b> ${extraData.population.toLocaleString()}</p>
                          <p><b>Area:</b> ${extraData.area} km²</p>
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

  return <div id="kerala-map"></div>;
};

export default KeralaMap;
