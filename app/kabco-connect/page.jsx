'use client';
import React from 'react';
import Navbar from '../components/navbar';
import Socials from '../components/socials';
import '../css/kabco-connect.css';

export default function KabcoConnectPage() {
  return (
    <div className="kabco-connect-container">
      <Navbar />
      <Socials />

      {/* Banner Image */}
      <div className="kabco-connect-banner"></div>

      {/* Main Content */}
      <div className="kabco-connect-content">
        <h1>🌾 KABCO Connect 🌱</h1>
        <h2>Empowering FPOs & Agri MSMEs</h2>

        <p className="kabco-connect-subtext">🤝 Collaborate. Learn. Grow.</p>

        <p className="kabco-connect-intro">
          Join KABCO Connect — your gateway to explore new opportunities with KABCO.
        </p>

        <p className="kabco-connect-description">
          KABCO Connect offers FPOs and MSMEs an opportunity to engage directly with KABCO, 
          gain insights into its initiatives, and explore potential avenues for collaboration. 
          You can schedule an online discussion to learn about KABCO’s services, market linkages, 
          the upcoming expo centres, incubation facilities, and related opportunities.
        </p>

        <ul>
          <li>✔ Engage directly with the KABCO team</li>
          <li>✔ Learn about KABCO’s services and support</li>
          <li>✔ Explore market linkage opportunities</li>
          <li>✔ Discover upcoming Expo Centres</li>
          <li>✔ Access Incubation & Innovation Facilities</li>
        </ul>

        <p className="kabco-connect-schedule">📅 Schedule an Online Discussion Today!</p>

        <div className="kabco-connect-contact">
          <strong>[CONTACT]</strong>
          <p>📧 info@kabco.in | 📞 +91-8089296852</p>
        </div>
      </div>
    </div>
  );
}
