'use client';
import React from 'react';
import '../css/central-gvmt.css';
import Navbar from '../components/navbar';
import Socials from '../components/socials';

export default function CentralSchemesPage() {
  return (
    <div className="central-gvmt-container">
      <Navbar />
      <Socials />
      <div className='central-gvmt-submain'>
        <header className="central-gvmt-header">
          <h1 className="central-gvmt-title">National Schemes</h1>
          <p className="central-gvmt-subtext">
            Below are the national schemes that support agri-business through funding, infrastructure, and ecosystem development.
          </p>
        </header>

        {/* Krishi Nivesh Scheme */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">Krishi Nivesh Yojana</h2>
          <p className="central-gvmt-scheme-desc">
            Your Gateway to Agri-Investment – Apply seamlessly to a wide range of schemes in Agriculture and Allied Sectors.
          </p>
          <div className="central-gvmt-links">
            <a href="https://krishinivesh.gov.in/#/" target="_blank" rel="noopener noreferrer">🌐 Check and Apply Online</a>
          </div>
        </section>

        {/* Jansamarth Scheme */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">Jansamarth Portal</h2>
          <p className="central-gvmt-scheme-desc">
            National Portal for Credit-Linked Government Schemes: A Unified Digital Platform Integrating Government Credit-Linked Initiatives
          </p>
          <div className="central-gvmt-links">
            <a href="https://www.jansamarth.in" target="_blank" rel="noopener noreferrer">🌐 Check and Apply Online </a>
          </div>
        </section>

        {/* Scheme 1 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">Agriculture Infrastructure Fund</h2>
          <p className="central-gvmt-scheme-desc">
            The Agriculture Infrastructure Fund (AIF) provides medium to long-term debt financing for post-harvest management infrastructure and community farming assets to improve value chain efficiency and reduce wastage.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme1.pdf" download>📄 Click here for scheme guidelines</a>
            <a href="/pdfs/central-scheme1-aif.pdf" download>📞 Click here for AIF team contact details</a>
          </div>
        </section>

        {/* Scheme 2 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            Pradhan Mantri Kisan Sampada Yojana (Integrated Cold Chain and Value Addition Infrastructure)
          </h2>
          <p className="central-gvmt-scheme-desc">
            This scheme focuses on the development of cold chain and preservation infrastructure from the farm gate to the consumer, minimizing wastage and enhancing farmer income.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme2.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 3 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            Pradhan Mantri Kisan Sampada Yojana (Agro Processing Cluster)
          </h2>
          <p className="central-gvmt-scheme-desc">
            This scheme promotes the development of agro-processing clusters with modern infrastructure to support small and medium agro-processing enterprises and enhance rural employment.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme3.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 4 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            MoFPI Scheme for Creation of Backward and Forward Linkages
          </h2>
          <p className="central-gvmt-scheme-desc">
            This scheme aims to provide effective and seamless backward and forward integration for processed food industry by linking it with farmers and supply chain infrastructure.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme4.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 5 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            Cluster Development Program (CDP) Scheme
          </h2>
          <p className="central-gvmt-scheme-desc">
            CDP focuses on the development of food processing industries in clusters to facilitate infrastructure development, skill development, and better market access for small and medium enterprises.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme5.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 6 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            Scheme for Operation Greens - Long Term Interventions
          </h2>
          <p className="central-gvmt-scheme-desc">
            This scheme aims to stabilize the supply and prices of TOP crops (Tomato, Onion, Potato) by promoting value chain development, cold storage, processing facilities, and logistics.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme6.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 7 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            MoFPI Scheme for Setting Up / Upgradation of Food Testing Laboratories
          </h2>
          <p className="central-gvmt-scheme-desc">
            This scheme supports the establishment and upgradation of food testing labs to ensure food safety, improve quality standards, and comply with global norms.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme7.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 8 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            PM Formalisation of Micro Food Processing Enterprises Scheme (PM FME)
          </h2>
          <p className="central-gvmt-scheme-desc">
            PM FME aims to provide financial, technical, and business support for setting up micro food processing enterprises, improving competitiveness, and ensuring better access to markets.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme8.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 9 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            Scheme of Fund for Regeneration of Traditional Industries (SFURTI)
          </h2>
          <p className="central-gvmt-scheme-desc">
            SFURTI promotes the development of traditional industries by providing support for technology upgradation, skill development, and improved market access.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme9.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 10 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            Sub Mission on Agricultural Mechanisation (SMAM)
          </h2>
          <p className="central-gvmt-scheme-desc">
            SMAM focuses on making farm mechanisation accessible and affordable to farmers, enhancing productivity, and reducing drudgery.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme10.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 11 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            PLI Scheme for Food Processing Industry
          </h2>
          <p className="central-gvmt-scheme-desc">
            The Production Linked Incentive Scheme aims to encourage investment in the food processing sector by offering incentives based on production and sales.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme11.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>

        {/* Scheme 12 */}
        <section className="central-gvmt-scheme-card">
          <h2 className="central-gvmt-scheme-title">
            Financial Assistance Scheme by APEDA
          </h2>
          <p className="central-gvmt-scheme-desc">
            APEDA offers financial assistance for infrastructure development, quality improvement, and export promotion of agricultural and processed food products.
          </p>
          <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme12.pdf" download>📄 Click here for scheme guidelines</a>
          </div>
        </section>
      </div>
    </div>
  );
}
