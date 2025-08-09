'use client';
import React from 'react';
import Navbar from '../components/navbar';
import Socials from '../components/socials';
import '../css/booklets.css';

const booklets = [
  {
    title: "Promotion of Farmer Producer Organisation",
    desc: "A guide to establishing and growing successful FPOs.",
    file: "/booklets/exhibition.pdf"
  },

];

export default function BookletsPage() {
  return (
    <div className="booklets-container">
      <Navbar />
      <Socials />

      <div className="booklets-content">
        <h1>📚 Booklets</h1>
        <p>
          Explore our curated collection of informative booklets, designed to
          help FPOs and Agri MSMEs gain knowledge, insights, and practical
          guidance.
        </p>

        <div className="booklets-grid">
          {booklets.map((b, idx) => (
            <div key={idx} className="booklet-card">
              <div>
                <div className="booklet-title">{b.title}</div>
                <div className="booklet-desc">{b.desc}</div>
              </div>
              <a href={b.file} download className="download-btn">
                ⬇ Download PDF
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
