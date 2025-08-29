'use client';
import Image from 'next/image';
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
        <div className="buyers-left">
          <h1 className="buyers-title">List of Buyers</h1>
          <p className="buyers-desc">
            Access the comprehensive database of verified buyers across various sectors. For your convenience, 
            the list is available for download in Excel format, allowing easy offline reference and analysis.
          </p>

          <div className="buyers-card">
            <h2 className="buyers-card-title">📂 Buyers Data</h2>
            <p className="buyers-card-text">Download the latest buyers list in Excel format.</p>
            <a href="/buyers/buyers.xlsx" download className="download-btn">
              ⬇ Download Excel
            </a>
          </div>

          {/* Buyer-Seller Meets */}
          <div className="buyers-meets">
            <h2 className="buyers-meets-title">Buyer-Seller Meets held by Kabco</h2>
            <div className="buyers-meets-gallery">
              {[
                { src: "/buyers/kochisummit.jpg", alt: "Kochi Summit", label: "Kochi Summit" },
                { src: "/buyers/kozhikode-fpo-mela.jpeg", alt: "Kozhikode FPO Mela", label: "Kozhikode FPO Mela" },
                { src: "/buyers/thrissurassocham.jpg", alt: "Thrissur ASSOCHAM Event", label: "Thrissur ASSOCHAM Event" },
                { src: "/buyers/cherthala.jpg", alt: "B2B Meet, Cherthala", label: "B2B Meet, Cherthala" }
              ].map((item, index) => (
                <div className="buyers-meets-item" key={index}>
                  <div className="image-wrapper">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      style={{ objectFit: "cover", borderRadius: "12px" }}
                    />
                  </div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
