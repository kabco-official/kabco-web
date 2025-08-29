'use client';
import React from 'react';
import '../css/list-of-buyers.css';
import Navbar from '../components/navbar';
import Socials from '../components/socials';

export default function ListOfBuyers() {
  return (
    <div>
      <Navbar />
      <Socials />

      <div className="buyers-main">
        {/* Left Content */}
        <div className="buyers-left">
          <h1 className="buyers-title">List of Buyers</h1>
          <p className="buyers-desc">
            Access the comprehensive database of verified buyers across various sectors. For your convenience, the list is available for download in Excel format, allowing easy offline reference and analysis.
          </p>

          <div className="buyers-card">
            <h2 className="buyers-card-title">📂 Buyers Data</h2>
            <p className="buyers-card-text">Download the latest buyers list in Excel format.</p>
            <a href="/buyers/buyers.xlsx" download className="download-btn">
              ⬇ Download Excel
            </a>
          </div>
        </div>

        {/* Right Images */}
        <div className="buyers-right">
          <img src="/home/slider1.jpg" alt="Buyers 1" />
          <img src="/home/slider3.jpg" alt="Buyers 2" />
        </div>
      </div>
    </div>
  );
}
