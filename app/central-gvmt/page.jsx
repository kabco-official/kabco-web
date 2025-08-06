'use client';
import React from 'react';
import '../css/central-gvmt.css';
import Navbar from '../components/navbar';
import Socials from '../components/socials';

export default function CentralSchemesPage() {
  return (
    <div className="central-gvmt-container">
      <Navbar/>
      <Socials/>
      <div className='central-gvmt-submain'>
        <header className="central-gvmt-header">
            <h1 className="central-gvmt-title">Central Government Schemes</h1>
            <p className="central-gvmt-subtext">
            Below are the central government schemes that support agri-business through funding, infrastructure, and ecosystem development.
            </p>
        </header>

        {/* Scheme 1 */}
        <section className="central-gvmt-scheme-card">
            <h2 className="central-gvmt-scheme-title">Agriculture Infrastructure Fund</h2>
            <p className="central-gvmt-scheme-desc">
            The Agriculture Infrastructure Fund (AIF) provides medium to long-term debt financing for post-harvest management infrastructure and community farming assets to improve value chain efficiency and reduce wastage.
            </p>
            <div className="central-gvmt-links">
            <a href="/pdfs/central-scheme1.pdf" download>
                📄 Click here for scheme guidelines
            </a>
            <a href="/pdfs/central-scheme1-aif.pdf" download>
                📞 Click here for AIF team contact details
            </a>
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
            <a href="/pdfs/central-scheme2.pdf" download>
                📄 Click here for scheme guidelines
            </a>
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
            <a href="/pdfs/central-scheme3.pdf" download>
                📄 Click here for scheme guidelines
            </a>
            </div>
        </section>
        </div>
    </div>
  );
}
