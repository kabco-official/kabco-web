'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import './css/home.css';
import Socials from './components/socials'; 

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
      <section className="about-section">
        <div className="about-container">
          <h2>About Us</h2>
          <h3>Our Story: Cultivating a Brighter Future for Kerala&#39;s Agriculture</h3>
          <p>
            Kerala Agro Business Company (KABCO) was born from a vision to revolutionize the agricultural landscape of our state.
            Established as a public-private partnership, KABCO is a testament to the collaborative spirit of Kerala, bringing together
            the government, dedicated farmers, and passionate farmer collectives. Our foundation is built on the belief that by working
            together, we can unlock the immense potential of our land and create a prosperous and sustainable future for our farming communities.
          </p>
          <p>
            We recognized the need for a unified force to champion the interests of our farmers, to modernize our agricultural practices,
            and to bring the rich bounty of Kerala to the world. KABCO was conceived to be that force – a dynamic entity committed to
            every step of the agricultural value chain, from seed to shelf.
          </p>

          <h3>Our Vision: A Thriving Agricultural Ecosystem</h3>
          <p>
            Our vision is to cultivate a thriving agricultural ecosystem in Kerala where farmers are empowered, innovation flourishes,
            and our produce is celebrated globally. We aspire to see a future where every farmer in Kerala has the resources and support
            they need to prosper, and where &#34;KeralAgro&#34; is a brand synonymous with quality, sustainability, and the vibrant taste of our land.
          </p>

          <h3>Our Mission: Empowering Farmers, Enriching Lives</h3>
          <ul>
            <li><strong>Ensuring Fair Value:</strong> We are dedicated to creating a transparent and efficient market that guarantees fair and timely returns for our farmers hard work.</li>
            <li><strong>Promoting Innovation:</strong> We strive to introduce and implement cutting-edge technology and sustainable farming practices to enhance productivity and crop quality.</li>
            <li><strong>Developing World-Class Infrastructure:</strong> Through the establishment of state-of-the-art agro-parks and food processing units, we aim to add value to our agricultural produce and minimize post-harvest losses.</li>
            <li><strong>Building a Global Brand:</strong> Under the unified brand &#34;KeralAgro&#34; we are committed to showcasing the exceptional quality of Kerala&#39;s agricultural products on the national and international stage.</li>
            <li><strong>Fostering Collaboration:</strong> We believe in the power of partnership and work closely with government agencies, farmer producer organizations (FPOs), and other stakeholders to achieve our collective goals.</li>
          </ul>

          <h3>What We Do: From Farm to Fork</h3>
          <p>
            KABCO is actively involved in a range of initiatives designed to strengthen Kerala&#39;s agricultural sector:
          </p>
          <ul>
            <li><strong>Agro-Parks and Processing Units:</strong> Establishing a network of modern agro-parks and fruit parks across the state to facilitate processing, value addition, and packaging of agricultural produce.</li>
            <li><strong>Marketing and Branding:</strong> Promoting the &#34;KeralAgro&#34; brand to create new opportunities in domestic and international markets.</li>
            <li><strong>The KABCO Agropolis:</strong> A landmark project in Thiruvananthapuram to serve as a central hub for trade, innovation, and collaboration, with an exhibition center, agri-tower, and tech park.</li>
            <li><strong>Farmer Support:</strong> Providing knowledge, resources, and guidance to help farmers adopt best practices and improve yields.</li>
          </ul>

          <p>
            At KABCO, we are more than just a company; we are a community united by a shared passion for agriculture and a commitment
            to the prosperity of Kerala. Join us on our journey as we cultivate a greener, more prosperous future for all.
          </p>
        </div>
      </section>


  
    </div>
  );
}
