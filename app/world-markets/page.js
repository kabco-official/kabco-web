import React from 'react';
import '../css/world-markets.css';
import Socials from '../components/socials';
import Navbar from '../components/navbar';

export default function Page() {
  const markets = [
    {
      heading: "Agriculture Urban Wholesale Market Anayara",
      rows: [
        { col1: "Area", col2: "15 Acre 95.470 cents" },
        { col1: "Survey No", col2: "₹1780,1781 & 1889" },
        { col1: "Coordinates", col2: "₹8⁰50’70”N Latitude, 76⁰91’30”E Longitude" },
        { col1: "Road Connectivity", col2: "NH -66 (Kasargod-Trivandrum) -100 Mts" },
        { col1: "Port Connectivity", col2: "Vizhinjam Port – 33 Kms" },
        { col1: "Rail Connectivity", col2: "Kochuveli -1.5 Km & Trivandrum Central 8 Km" },
        { col1: "Nearest Airport", col2: "Trivandrum International Airport – 9 Km" },
      ],
    },
    {
      heading: "Agriculture Urban Wholesale Market Maradu",
      rows: [
        { col1: "Area", col2: "18.4 ha (46 acers)" },
        { col1: "Survey No", col2: "509, 510, 532 to 551, 552, 553, 554, 560 to 575,844,884, 1695, 1726 and 1727" },
        { col1: "Vacant land area", col2: "Mangroves, marshy land – 14.82 (Acre)Area for further dev. –5.43 (Acre)" },
        { col1: "Coordinates", col2: "9⁰92’70” N Latitude, 76⁰32’03”E Longitude" },
        { col1: "Road Connectivity", col2: "NH -66 (Kasargod-Trivandrum) -200 Mts" },
        { col1: "Port Connectivity", col2: "Cochin Port - 19 Kms" },
        { col1: "Rail Connectivity", col2: "Ernakulam Junction – 9 km" },
        { col1: "Nearest Airport", col2: "Cochin International Airport - 34 kms" },
      ],
    },
    {
      heading: "Agriculture Urban Wholesale Market Vengeri",
      rows: [
        { col1: "Area", col2: "23.16 Acres" },
        { col1: "Survey No", col2: "30 to 36" },
        { col1: "Vacant land area", col2: "9 Acre" },
        { col1: "Coordinates", col2: "11°17'48.9444``N Latitude, 75°47'23.0460``ELongitude" },
        { col1: "Road Connectivity", col2: "NH 66 – 300 Meters" },
        { col1: "Port Connectivity", col2: "Calicut Port - 50 KM" },
        { col1: "Rail Connectivity", col2: "Kozhikode Railway station – 8 Km" },
        { col1: "Nearest Airport", col2: "Calicut International Airport is 30 KM" },
      ],
    },
    {
      heading: "Agriculture Rural Wholesale Market Nedumangad",
      rows: [
        { col1: "Area", col2: "15 Acre 19.63 cents" },
        { col1: "Survey No", col2: "1684, 1686, 1824, 1825, 1827, 1828, 1829" },
        { col1: "Coordinates", col2: "8⁰60’01”N Latitude, 77⁰00’68”E Longitude" },
        { col1: "Road Connectivity", col2: "SH -2 (Trivandrum to Thenmala) -100 Mts" },
        { col1: "Port Connectivity", col2: "Vizhinjam port – 33 km" },
        { col1: "Rail Connectivity", col2: "Trivandrum Central Railway Station – 18 Km" },
        { col1: "Nearest Airport", col2: "Trivandrum International Airport – 26 Km" },
      ],
    },
    {
      heading: "Agriculture Rural Wholesale Market Muvattupuzha",
      rows: [
        { col1: "Area", col2: "5.82 Ha (14.55 Ac)" },
        { col1: "Survey No", col2: "901, 902, 907 and 908" },
        { col1: "Coordinates", col2: "9⁰99’05”N Latitude, 76⁰57’34”E Longitude" },
        { col1: "Road Connectivity", col2: "SH-41 (400Mtrs)" },
        { col1: "Port Connectivity", col2: "Cochin port – 42 Km" },
        { col1: "Rail Connectivity", col2: "Ernakulam railway station – 32 Km" },
        { col1: "Nearest Airport", col2: "Cochin international airport – 35 Km" },
      ],
    },
    {
      heading: "Agriculture Rural Wholesale Market Sulthan Bathery",
      rows: [
        { col1: "Area", col2: "10.35 Acres" },
        { col1: "Survey No", col2: "631 and 633" },
        { col1: "Vacant land area", col2: "4 Ac (1.6 ha)" },
        { col1: "Coordinates", col2: "11.647251⁰ N Latitude, 76.25946⁰ E Longitude" },
        { col1: "Road Connectivity", col2: "SH 694 – 30 mtr. Kozhikode–Kollegal National Highway (NH 766)" },
        { col1: "Port Connectivity", col2: "Kozhikode Port - 103 KM" },
        { col1: "Rail Connectivity", col2: "Nilambur Railway Station – 27 Km" },
        { col1: "Nearest Airport", col2: "Calicut airport – 100 Km" },
      ],
    },
  ];

  return (
    <div className="world-markets">
      <Navbar />
      <h1 className="page-heading">World Markets</h1>
      <Socials />
      {markets.map((market, index) => (
        <div key={index} className="market-section">
          <h2 className="market-heading">{market.heading}</h2>
          <table className="market-table">
            <thead>
              <tr>
                <th>Attributes</th>
                <th>Site Visit Observation</th>
              </tr>
            </thead>
            <tbody>
              {market.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.col1}</td>
                  <td>{row.col2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
