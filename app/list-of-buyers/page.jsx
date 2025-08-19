import React from 'react';
import '../css/list-of-buyers.css';
import Navbar from '../components/navbar';
import Socials from '../components/socials';

export default function ListOfBuyers() {
  return (
    <div>
      <Navbar/>
      <Socials/>
      <div className="buyers-container">
        <h1 className="buyers-title">List of Buyers</h1>
        <p className="buyers-desc">
            Access the complete list of registered buyers. You can download the following file
            for offline reference.
        </p>

        <div className="buyers-card">
            <h2 className="buyers-card-title">📂 Buyers Data</h2>
            <p className="buyers-card-text">Download the latest buyers list in Excel format.</p>
            <a href="/buyers/buyers.xlsx" download className="download-btn">
            ⬇ Download Excel
            </a>
        </div>
        </div>
    </div>
  );
}
