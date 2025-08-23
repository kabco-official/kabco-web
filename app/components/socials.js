'use client';

import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '../css/home.css'; // Optional: include styles if needed

const Socials = () => {
  return (
    <div className="social-icons">
      <a href="https://www.instagram.com/kabco_tvm" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/people/Kerala-Agro-Business-Company/61568072270807" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.youtube.com/@KeralaAgroBusinessCompany" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
      <a href="https://www.linkedin.com/in/kabco/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B918089296852&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Socials;
