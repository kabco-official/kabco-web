"use client";

import React from "react";
import "../css/dprs.css";
import Navbar from "../components/navbar";
import Socials from "../components/socials";

const dprs = [
  {
    title: "Custom Hiring Center",
    desc: "Download a template for managing project costs of custom hiring centers.",
    file: "/dpr/custom_hiring_center.xlsx",
  },
  {
    title: "Cold Storage",
    desc: "Easily plan expenses and resources for cold storage projects.",
    file: "/dpr/cold_storage.xlsx",
  },
  {
    title: "Chilly Processing Unit",
    desc: "Organize your budget for setting up a chilly processing unit.",
    file: "/dpr/chilly_processing.xlsx",
  },
  {
    title: "Rice Mill",
    desc: "Keep track of costs for rice mill projects with this structured template.",
    file: "/dpr/rice_mill.xlsx",
  },
  {
    title: "Warehouse",
    desc: "Plan and update expenses for warehouse projects effectively.",
    file: "/dpr/warehouse.xlsx",
  },
  {
    title: "Turmeric Processing Unit",
    desc: "Template to calculate and organize expenses for turmeric processing.",
    file: "/dpr/turmeric_processing.xlsx",
  },
  {
    title: "Spice Processing Unit",
    desc: "Download and manage cost details for spice processing units.",
    file: "/dpr/spice_processing.xlsx",
  },
  {
    title: "Fruits and Vegetables Unit",
    desc: "Get a ready-to-use budget sheet for fruits and vegetables processing.",
    file: "/dpr/fruits_vegetables.xlsx",
  },
];

export default function page() {
  return (
    <div className="dpr-container">
        <Navbar />
        <Socials />
      <div className="dpr-submain">
        <header className="dpr-header">
          <h1 className="dpr-title">Detailed Project Reports (DPRs)</h1>
          <p className="dpr-subtext">
            Need help planning your project costs? Download ready-made DPR
            (Detailed Project Report) Excel templates. Just pick the one you
            need, fill in your project details, and you're good to go! These
            templates make it easy to organize and update your project budget
            for the Final DPR.
          </p>
        </header>

        <div>
          {dprs.map((dpr, index) => (
            <div key={index} className="dpr-card">
              <h2 className="dpr-card-title">{dpr.title}</h2>
              <p className="dpr-card-desc">{dpr.desc}</p>
              <div className="dpr-links">
                <a href={dpr.file} download>
                  Download Excel
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
