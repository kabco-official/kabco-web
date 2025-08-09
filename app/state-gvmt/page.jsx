'use client';
import React from 'react';
import '../css/state-gvmt.css';
import Navbar from '../components/navbar';
import Socials from '../components/socials';

export default function StateSchemesPage() {
  return (
    <div className="state-gvmt-container">
      <Navbar />
      <Socials />
      <div className='state-gvmt-submain'>
        <header className="state-gvmt-header">
          <h1 className="state-gvmt-title">State Government Schemes</h1>
          <p className="state-gvmt-subtext">
            Below are the state government schemes that support agri-business through funding, infrastructure, and ecosystem development.
          </p>
        </header>

        {/* Scheme 1 */}
        <section className="state-gvmt-scheme-card">
          <h2 className="state-gvmt-scheme-title">
            Promotion of FPOs through SFAC Kerala
          </h2>
          <p className="state-gvmt-scheme-desc">
            This scheme provides support for innovative projects on horticultural crops by Farmer Producer Organisations (FPOs) in Kerala.
            It aims to strengthen the horticulture value chain, encourage collective farming, and promote sustainable agricultural practices.
          </p>
          <div className="state-gvmt-links">
            <a href="/pdfs/state-scheme1.pdf" download>
              📄 Click here for scheme guidelines
            </a>
          </div>
        </section>

        {/* Scheme 2 */}
        <section className="state-gvmt-scheme-card">
          <h2 className="state-gvmt-scheme-title">
            SHM Schemes
          </h2>
          <p className="state-gvmt-scheme-desc">
            The State Horticulture Mission (SHM) schemes focus on the holistic development of the horticulture sector in Kerala, 
            supporting farmers with subsidies, infrastructure development, and training for better yield and quality produce.
          </p>
          <div className="state-gvmt-links">
            <a href="/pdfs/state-scheme2.pdf" download>
              📄 Click here for scheme guidelines
            </a>
          </div>
        </section>

        {/* Scheme 3 */}
        <section className="state-gvmt-scheme-card">
          <h2 className="state-gvmt-scheme-title">
            MSME Scheme for Value Addition by SFAC Kerala
          </h2>
          <p className="state-gvmt-scheme-desc">
            This scheme encourages Micro, Small, and Medium Enterprises (MSMEs) to enhance value addition in agricultural products, 
            providing financial aid, technical guidance, and marketing support for scaling up operations.
          </p>
          <div className="state-gvmt-links">
            <a href="/pdfs/state-scheme3.pdf" download>
              📄 Click here for scheme guidelines
            </a>
          </div>
        </section>

        {/* Scheme 4 */}
        <section className="state-gvmt-scheme-card">
          <h2 className="state-gvmt-scheme-title">
            Credit Support Schemes & Agencies for Existing and Prospective Entrepreneurs
          </h2>
          <p className="state-gvmt-scheme-desc">
            These schemes aim to provide credit facilities to existing and new entrepreneurs in the agri-business sector, 
            offering loans, subsidies, and guarantees through various state-supported financial agencies.
          </p>
          <div className="state-gvmt-links">
            <a href="/pdfs/state-scheme4.pdf" download>
              📄 Click here for scheme guidelines
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
