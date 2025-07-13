'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import './css/home.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // <-- import icons

const sliderImages = [
  '/home/slider1.jpg',
  '/home/slider2.jpeg',
  '/home/slider3.jpg',
  '/home/slider4.jpg',
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Navbar */}
      <Navbar />

      {/* Slider with Arrows */}
      <div className="slider">
        <Image
          src={sliderImages[current]}
          alt={`Slide ${current + 1}`}
          layout="fill"
          priority
          objectFit="cover"
        />
        <button className="arrow left" onClick={goPrev}>
          &#10094;
        </button>
        <button className="arrow right" onClick={goNext}>
          &#10095;
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
