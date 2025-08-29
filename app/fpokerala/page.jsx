import React from "react";
import "../css/fpokerala.css";
import Navbar from "../components/navbar";
import Socials from "../components/socials";

export default function Page() {
  return (
    <div className="fpo-container">
      <Navbar />
      <Socials />
      <div className="fpo-content">
        <h1 className="fpo-title">FPO's in Kerala</h1>
        <p className="fpo-description">
          Farmer Producer Organizations (FPOs) in Kerala play a vital role in
          empowering farmers by improving access to resources, markets, and
          financial support. Below are the details of FPOs formed and promoted
          under different government schemes.
        </p>

        {/* Row 1 */}
        <div className="fpo-row">
          <h2 className="fpo-heading">
            Details of FPOs Formed & Promoted under RKVY 2019-20 Scheme under SFAC Kerala
          </h2>
          <p className="fpo-text">
            These FPOs were established under the Rashtriya Krishi Vikas Yojana
            (RKVY) scheme during 2019-20 with the support of Small Farmers’
            Agribusiness Consortium (SFAC) in Kerala. They aim to strengthen
            farmers’ collective capacity and ensure better income opportunities.
          </p>
          <a
            href="/fposkerala/rkvy.pdf"
            download="rkvy-2019-20.pdf"
            className="download-btn"
          >
            Download PDF
          </a>
        </div>

        {/* Row 2 */}
        <div className="fpo-row">
          <h2 className="fpo-heading">
            Details of FPOs Formed & Promoted under 10,000 FPOs CSS, Govt. of India in Kerala
          </h2>
          <p className="fpo-text">
            The 10,000 FPOs Central Sector Scheme (CSS) initiated by the Government
            of India focuses on creating sustainable farmer collectives. In Kerala,
            these FPOs provide a platform for farmers to access larger markets and
            adopt modern agricultural practices.
          </p>
          <a
            href="/fposkerala/fpo-10000.xlsx"
            download="fpo-10000.xlsx"
            className="download-btn"
          >
            Download Excel
          </a>
        </div>
      </div>
    </div>
  );
}
