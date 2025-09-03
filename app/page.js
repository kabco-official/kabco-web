'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import './css/home.css';

import Socials from './components/socials';
import KeralaMap from './components/keralaMap';

const sliderImages = [
  '/home/newbg-1.jpg',
  '/home/newbg-2.jpg',
  '/home/newbg-3.jpg',
  '/home/newbg-4.jpg',
  '/home/newbg-5.jpg',
  '/home/newbg-6.jpg',
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
      <Socials />

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

      {/* About Section */}
      <div className="about-container">
        {/* Left side text */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to KABCO, Kerala’s premier agricultural company dedicated to 
            empowering farmers and fostering sustainable growth. Our vision is to 
            combine traditional wisdom with modern technology to create a thriving 
            agricultural community.
          </p>
          <p>
            At KABCO, we believe that agriculture is not just a livelihood—it is the 
            backbone of our society. With this philosophy, we provide farmers with 
            access to innovative farming techniques, quality seeds, modern machinery, 
            and expert consultation. Our programs are designed to increase crop yield, 
            improve soil health, and promote eco-friendly practices.
          </p>
          <p>
            Our team of experts works closely with farmers, local communities, and 
            industry partners to develop solutions tailored to the unique challenges 
            of Kerala’s diverse agricultural landscape. From precision farming and 
            smart irrigation systems to organic cultivation and market access, KABCO 
            ensures that farmers have the tools, knowledge, and support to succeed.
          </p>
          <p>
            Sustainability is at the heart of everything we do. We actively promote 
            eco-friendly farming practices, responsible water usage, and organic 
            methods that protect both the environment and the farmers’ long-term 
            interests. Our green initiatives include community-based training programs, 
            soil health monitoring, and renewable energy integration for farms.
          </p>
          <p>
            Beyond agriculture, KABCO is committed to uplifting local communities. We 
            support educational workshops, skill-building initiatives, and farmer 
            empowerment programs to create a self-sustaining ecosystem. Our goal is 
            to bridge the gap between traditional knowledge and modern techniques, 
            ensuring a prosperous future for every farmer.
          </p>
          <p>
            By leveraging technology, sustainable practices, and community engagement, 
            KABCO aims to transform farming in Kerala into a smart, productive, and 
            eco-conscious venture. Join us in our mission to cultivate not just crops, 
            but a brighter, greener future for generations to come.
          </p>
        </div>

        {/* Right side images */}
        <div className="about-images">
          <img src="/home/slider3.jpg" alt="Farming 1" />
          <img src="/home/slider2.jpeg" alt="Farming 2" />
          <img src="/home/slider4.jpg" alt="Farming 3" />
        </div>
      </div>


      <KeralaMap />
    </div>
  );
}
