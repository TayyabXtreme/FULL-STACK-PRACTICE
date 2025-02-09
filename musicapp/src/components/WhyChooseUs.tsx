"use client";

import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
    {
      title: "Music Collaboration",
      description:
        "Collaborate with fellow musicians in real time. Share ideas, create tracks together, and produce music seamlessly. Streamline your music production workflow and make creative decisions quickly.",
    },
    {
      title: "Live Jamming",
      description:
        "Join live jam sessions with musicians around the world. Play, create, and perform music together, no matter where you are. Experience the energy of a live performance, right from your home studio.",
    },
    {
      title: "Music Sharing",
      description:
        "Share your music with the world. Upload, distribute, and promote your tracks effortlessly. Reach a global audience and get discovered by fans and industry professionals alike.",
    },
    {
      title: "Music Lessons",
      description:
        "Learn from the best with interactive music lessons. Whether you're a beginner or a seasoned musician, improve your skills with personalized lessons and real-time feedback from professional instructors.",
    },
    {
      title: "Music Collaboration Tools",
      description:
        "Access powerful tools designed for collaborative music creation. From virtual instruments to shared recording spaces, our platform empowers you to make music together, no matter the distance.",
    },
    {
      title: "Music Communities",
      description:
        "Join thriving music communities and connect with like-minded artists. Share your passion, collaborate on projects, and grow your network. Whether you're into rock, jazz, or electronic music, find your creative tribe here.",
    }
  ];
  

const WhyChooseUs = () => {
  return (
    <div>

        <StickyScroll content={content} />

    </div>
  )
}

export default WhyChooseUs