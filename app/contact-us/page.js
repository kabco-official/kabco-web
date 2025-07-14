import React from 'react';
import '../css/contact.css'; 
import Navbar from '../components/navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Fill out the form below to get in touch.</p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+91 98765 43210"
              pattern="[0-9+ ]{10,15}"
              title="Enter a valid phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="6" placeholder="Write your message here..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </>
  );
}
