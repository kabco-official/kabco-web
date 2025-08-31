'use client'
import React from 'react'
import '../css/fpo-videos.css'
import Navbar from '../components/navbar'
import Socials from '../components/socials'

export default function Page() {
  const videos = [
    {
      id: "t2SRtZN90MU", // replace with your actual video ID
      title: "SFAC Kerala FPO Success Stories"
    },
    {
      id: "Y34M95xPWnc",
      title: "KABCO Training for FPOs"
    },
    {
      id: "53N6DO8TnFE",
      title: "How to Apply for KERA"
    },
    {
      id: "uHUb7ZTQ23Y",
      title: "Success Model FPC"
    }
  ]

  return (
    <div className="fpo-videos-container">
      <Navbar />
      <Socials />
      <div className='fpo-content'>
      <h1 className="fpo-heading">FPO Videos</h1>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
