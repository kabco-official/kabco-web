'use client'
import React, { useState } from 'react';
import '../css/contact.css'; 
import Navbar from '../components/navbar';
import Socials from '../components/socials';  
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await addDoc(collection(db, 'contactMessages'), {
        ...formData,
        createdAt: Timestamp.now()
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Error saving message: ", error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <>
      <Navbar />
      <Socials />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We would love to hear from you. Fill out the form below to get in touch.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange} />
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
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="6" placeholder="Write your message here..." required value={formData.message} onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </>
  );
}
