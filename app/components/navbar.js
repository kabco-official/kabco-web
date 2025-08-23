'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  [], // Home
  ['Central Govt. Schemes', 'State Govt. Schemes'],
  ['List of Buyers', 'KABCO-connect', 'Exhibitions', 'BP Providers', 'Model DPRs'],
  ['World Markets', 'Agri-Parks', 'FPOs in Kerala'],
  ['FPO Videos', 'Presentations', 'Booklets'],
  ['Photo Gallery', 'Video Gallery', 'Kabco in Media'], // Gallery dropdown
  [], // Contact Us
];

const Navbar = () => {
  const router = useRouter();

  const [openIndex, setOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const gotocontact = () => {
    router.push('/contact-us');
  };

  const goToPage = (page) => {
    if (page === 'Home') {
      router.push('/');
    }
  };

  const routeMap = {
    'Central Govt. Schemes': '/central-gvmt',
    'State Govt. Schemes': '/state-gvmt',
    'KABCO-connect': '/kabco-connect',
    'Booklets': '/booklets',
    'List of Buyers': '/list-of-buyers',
    'Photo Gallery': 'https://kabco.co.in/photo-gallery',
    'Video Gallery': 'https://kabco.co.in/video-gallery',
    'Kabco in Media': 'https://kabco.co.in/kabco-in-media',
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Image src="/home/KABCO.png" alt="Company Logo" width={60} height={30} />
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu Items */}
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <div key={item} className="navItem">
            <span
              onClick={() => {
                if (item === 'Contact Us') {
                  gotocontact();
                } else if (item === 'Home') {
                  goToPage(item);
                } else {
                  handleClick(index); // Gallery now works like Schemes
                }
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
  );
};

export default Navbar;
