import React from 'react';
import '../css/bds.css';
import Navbar from '../components/navbar';
import Socials from '../components/socials';

const bdsBlocks = [
  {
    title: "Lok Sabha Questions Annex 175",
    desc: "A detailed compilation of questions raised in the Lok Sabha along with annexures for reference.",
    file: "/bds/loksabha175.pdf"
  },
  {
    title: "Lok Sabha Questions Annex 16",
    desc: "A detailed compilation of questions raised in the Lok Sabha along with annexures for reference.",
    file: "/bds/loksabha16.pdf"
  },
  {
    title: "CEFPPC Report",
    desc: "Comprehensive report on the Central Food Processing Promotion Council's initiatives and projects.",
    file: "/bds/cefppc.pdf"
  },
  {
    title: "Food Processing Industry Report",
    desc: "An in-depth analysis of the current trends, challenges, and growth opportunities in the food processing industry.",
    file: "/bds/fpir.pdf"
  },
  {
    title: "PAD List",
    desc: "Official list of PAD (Public Assistance Distribution) items with relevant details and classifications.",
    file: "/bds/pad.pdf"
  },
  {
    title: "Food Processing and Packaging Machinery",
    desc: "This document provides information about the Food Processing Equipment sector, covering machines used for preparing, preserving, and packaging food products to ensure efficiency, safety, and quality.",
    file: "/bds/food-processing.pdf"
  },
  {
    title: "MOFPI Assisted Completed Food Processing Projects",
    desc: "With support from the Ministry of Food Processing Industries, the completed food processing projects focus on strengthening infrastructure, enhancing value addition, and improving efficiency across the sector.",
    file: "/bds/completed_project_list.pdf"
  }
];

export default function Page() {
  return (
    <div className="bds-container">
        <Navbar />
        <Socials />

      <div className="bds-content">
        <div className="bds-header">
          <h1>BDS Providers</h1>
          <p>
            Below are important resources and documents provided by BDS for reference and download. Click the buttons to access the relevant PDFs.
          </p>
        </div>

        <div className="bds-blocks">
          {bdsBlocks.map((block, index) => (
            <div className="bds-block" key={index}>
              <h2>{block.title}</h2>
              <p>{block.desc}</p>
              <a href={block.file} download className="bds-download-btn">
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
