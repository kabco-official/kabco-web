'use client'
import React from 'react'
import '../css/kera.css'
import Navbar from '../components/navbar'
import Socials from '../components/socials'

export default function Page() {
  const handleDownload = () => {
    const files = [
      "/kera/kera1.pdf",
      "/kera/kera2.pdf"
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="kera-container">
        <Navbar />
        <Socials />
      <div className='kera-content'>
      <h1 className="kera-heading">KERA World Bank Project</h1>

      <p className="kera-description">
        The <b>Kerala Climate Resilient Agri-Value Chain Modernization (KERA) World Bank Project</b> is an initiative designed to promote 
        sustainable agriculture, empower farmers, and build a resilient rural economy. 
        By providing access to modern practices, financial support, and training, 
        the project ensures inclusive growth and long-term development for communities.
      </p>

      <div className="kera-buttons">
        <button onClick={handleDownload} className="download-btn">
          📥 Download PDF's
        </button>
      </div>
      </div>
    </div>
  )
}
