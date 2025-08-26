'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

import '../css/home.css';

const menuItems = [
  'Home',
  'Schemes',
  'Market Intelligence & BDS',
  'FPO & Agri MSME Ecosystem',
  'Case-let & Publications',
  'Gallery',
  'Contact Us',
];

const dropdowns = [
  [],
  ['Central Govt. Schemes', 'State Govt. Schemes'],
  ['List of Buyers', 'KABCO-connect', 'Exhibitions', 'BP Providers', 'Model DPRs'],
  ['World Markets', 'Agri-Parks', 'FPOs in Kerala'],
  ['FPO Videos', 'Presentations', 'Booklets'],
  ['Photo Gallery', 'Video Gallery', 'Kabco in Media'],
  [],
];

const routeMap = {
  'Central Govt. Schemes': '/central-gvmt',
  'State Govt. Schemes': '/state-gvmt',
  'KABCO-connect': '/kabco-connect',
  'Booklets': '/booklets',
  'List of Buyers': '/list-of-buyers',
  'Photo Gallery': 'https://kabco.co.in/photo-gallery',
  'Video Gallery': 'https://kabco.co.in/video-gallery',
  'Kabco in Media': 'https://kabco.co.in/kabco-in-media',
  'World Markets': '/world-markets',
  'Model DPRs': '/dprs'
};

const Navbar = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const gotocontact = () => router.push('/contact-us');

  const goToPage = (page) => {
    if (page === 'Home') router.push('/');
  };

  // Initialize Google Translate
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'ml,en',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <>
      {/* Google Translate Script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function doGTranslate(langPair) {
            if (langPair.value) langPair = langPair.value;
            if (langPair === '') return;

            var lang = langPair.split('|')[1];
            var select = document.querySelector('.goog-te-combo');

            // Remove old iframe if exists
            document.querySelectorAll('iframe.goog-te-menu-frame').forEach(f => f.remove());

            // If widget not ready, re-initialize
            if (!select) {
              const container = document.getElementById('google_translate_element');
              container.innerHTML = '';
              if (typeof googleTranslateElementInit === 'function') {
                googleTranslateElementInit();
              }
              setTimeout(function () {
                doGTranslate(langPair);
              }, 500);
              return;
            }

            select.value = lang;
            select.dispatchEvent(new Event('change'));
          }

          function changeLanguage(lang) {
            if (lang === 'Malayalam') {
              doGTranslate('en|ml');
            } else {
              doGTranslate('en|en');
            }
          }

          window.changeLanguage = changeLanguage;
        `}
      </Script>

      {/* Custom Translation Bar */}
      <div
        style={{
          background: '#f9f9f9',
          borderBottom: '1px solid #ddd',
          padding: '4px 10px',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>
          Language:
          <select
            onChange={(e) => window.changeLanguage(e.target.value)}
            style={{
              fontSize: '13px',
              marginLeft: '6px',
              padding: '2px 5px',
            }}
          >
            <option value="English">English</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </span>
      </div>

      {/* Hidden Google widget */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      {/* Actual Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Image src="/home/KABCO.png" alt="Company Logo" width={60} height={30} />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <div key={item} className="navItem">
              <span
                onClick={() => {
                  if (item === 'Contact Us') gotocontact();
                  else if (item === 'Home') goToPage(item);
                  else handleClick(index);
                }}
              >
                {item}
              </span>

              {openIndex === index && dropdowns[index].length > 0 && (
                <div className="dropdown">
                  {dropdowns[index].map((option, optIdx) => (
                    <span
                      key={optIdx}
                      onClick={() => {
                        const path = routeMap[option];
                        if (path) {
                          router.push(path);
                          setOpenIndex(null);
                        }
                      }}
                      className="dropdown-item"
                      style={{ cursor: 'pointer', display: 'block', padding: '10px 10px' }}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
