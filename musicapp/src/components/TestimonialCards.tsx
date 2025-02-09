'use client';

import { title } from 'process';
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-card';

const musicSchoolTestimonials = [
    {
      quote: "I have been a student at the music school for 3 years now and I have learned so much. The teachers are great and the facilities are top notch.",
      name: "Alex Johnson",
      title: "Guitar Student",
    },
    {
      quote: "This music school has changed my life. The instructors are amazing, and I've grown so much as a pianist. Highly recommended!",
      name: "Emily Brown",
      title: "Piano Student",
    },
    {
      quote: "The vocal training I've received here is exceptional. I've gained so much confidence and improved my singing technique drastically.",
      name: "Michael Green",
      title: "Vocal Student",
    },
    {
      quote: "Learning the drums at this school has been an incredible experience. The teachers are patient and really know how to help you improve.",
      name: "Sophia Martinez",
      title: "Drum Student",
    },
    {
      quote: "The music theory classes are top-notch. I've gained a deep understanding of music composition, which has really enhanced my playing.",
      name: "James Anderson",
      title: "Music Theory Student",
    },
    {
      quote: "As a violin student, I couldn't ask for a better place to learn. The teachers here are passionate and truly care about your progress.",
      name: "Olivia Davis",
      title: "Violin Student",
    },
    {
      quote: "I've tried other music schools before, but this one stands out. The supportive community and skilled instructors make all the difference.",
      name: "William Taylor",
      title: "Saxophone Student",
    },
    {
      quote: "The school has an excellent balance between classical training and modern music education. I feel well-prepared for any musical challenge.",
      name: "Ava Wilson",
      title: "Flute Student",
    },
    {
      quote: "The flexibility of the classes and the personalized attention make this school the best choice for any aspiring musician.",
      name: "Liam Thomas",
      title: "Cello Student",
    }
  ];
  

const TestimonialCards = () => {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
        <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear our Harmony: Voices of Success</h2>
        <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
        <InfiniteMovingCards items={musicSchoolTestimonials} direction='right' speed='slow' />
        </div>
        </div>
        
    </div>
  )
}

export default TestimonialCards