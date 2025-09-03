'use client';
import React from 'react';
import Navbar from '../components/navbar';
import Socials from '../components/socials';
import '../css/booklets.css';

const booklets = [
  {
    title: "Promotion of Farmer Producer Organisation",
    desc: "A guide to establishing and growing successful FPOs.",
    file: "/booklets/booklet1.pdf"
  },
  {
    title: "The Entrepreneurial Farmer",
    desc: "A guide for farmers to adopt innovative practices, access markets, and build sustainable agri-business ventures.",
    file: "/booklets/entrepreneurial-farmer.pdf"
  },
  {
    title: "Compendium of 75-Agri Entrepreneur and Innovators",
    desc: "A compendium of 75 agri entrepreneurs and innovators showcasing inspiring ideas, sustainable practices, and impactful ventures shaping the future of agriculture.",
    file: "/booklets/Compendium-of-75-Agri-Entrepreneur-and-Innovators.pdf"
  },
  {
    title: "Success Stories of FPOs",
    desc: "A collection of inspiring success stories from Farmer Producer Organisations (FPOs), highlighting their achievements, innovative practices, and impact on rural communities and agriculture.",
    file: "/booklets/Success Stories of FPOs_Aug 2020.pdf"
  },
  {
    title: "Impact Evaluation Study of FPOs",
    desc: "An analytical study assessing the performance, outcomes, and socio-economic impact of Farmer Producer Organisations (FPOs) on farmers and rural communities.",
    file: "/booklets/Ipmact-Evaluation-Study-of-FPOs-promoted-by-NABARD-TGRO.pdf"
  },
  {
    title: "Impact Assessment of FPC",
    desc: "A study evaluating the effectiveness, outcomes, and benefits of Farmer Producer Companies (FPCs) in enhancing farmer livelihoods and promoting sustainable agricultural practices.",
    file: "/booklets/Impact Assessment of FPC.pdf"
  },
  {
    title: "National policy on FPOs",
    desc: "An official framework outlining guidelines, strategies, and support mechanisms for the promotion, development, and governance of Farmer Producer Organisations (FPOs) across the country.",
    file: "/booklets/National_policy_onFPOs.pdf"
  },
  {
    title: "Ministry of Agriculture and Farmers Welfare, annual report 2024-2025",
    desc: "Agriculture and Farmers Welfare outlines key initiatives and progress in India’s agriculture sector.",
    file: "/booklets/annual-report.pdf"
  },
  {
    title: "Agriculture and Food Management",
    desc: "A key sector for the future, Agriculture and Food Management emphasizes sustainable practices, modern technologies, and efficient supply chains to drive growth and resilience in farming and food systems.",
    file: "/booklets/food-management.pdf"
  },
  {
    title: "Agro Chem Federation of India-Crop Advisory Database",
    desc: "A comprehensive database by the Agro Chem Federation of India providing crop advisory, guidance, and best practices to support farmers and improve agricultural productivity.",
    link: "https://www.acfiindia.com/member-companies"
  }
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

              {b.file && (
                <a href={b.file} download className="download-btn">
                  ⬇ Download PDF
                </a>
              )}

              {b.link && (
                <a href={b.link} target="_blank" rel="noopener noreferrer" className="download-btn">
                  🌐 Click here to learn more
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
