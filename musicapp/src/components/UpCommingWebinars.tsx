'use client';

import Link from 'next/link'


import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

const UpCommingWebinars = () => {

    const featuredWebinars = [
        {
          title: 'Understanding the Basics of Music Theory',
          description: 'Join us for a deep dive into the fundamentals of music theory. This webinar is perfect for beginners and intermediate musicians who want to enhance their understanding of music.',
          slug: 'understanding-the-basics-of-music-theory',
          isFeatured: true
        },
        {
          title: 'Introduction to Jazz Improvisation',
          description: 'Explore the world of jazz improvisation in this engaging webinar. Learn how to create spontaneous melodies and harmonies with your instrument.',
          slug: 'introduction-to-jazz-improvisation',
          isFeatured: true
        },
        
        {
          title: 'Advanced Guitar Techniques',
          description: 'Take your guitar playing to the next level with advanced techniques and tips from professional guitarists in this webinar.',
          slug: 'advanced-guitar-techniques',
          isFeatured: true
        },
        {
          title: 'Vocal Performance Masterclass',
          description: 'Improve your vocal performance skills with expert guidance in this interactive masterclass. Perfect for singers of all levels.',
          slug: 'vocal-performance-masterclass',
          isFeatured: false
        },
        {
          title: 'Electronic Music Production Essentials',
          description: 'Learn the essentials of electronic music production, including beat-making, sound design, and mixing techniques.',
          slug: 'electronic-music-production-essentials',
          isFeatured: true
        },
        {
          title: 'Songwriting 101: From Idea to Hit',
          description: 'Learn the art of songwriting, from generating ideas to crafting lyrics and melodies, in this comprehensive webinar.',
          slug: 'songwriting-101-from-idea-to-hit',
          isFeatured: true
        },
        {
          title: 'Music Marketing for Indie Artists',
          description: 'Discover effective marketing strategies for independent artists to promote their music and grow their fanbase.',
          slug: 'music-marketing-for-indie-artists',
          isFeatured: false
        },
        {
          title: 'Film Scoring Fundamentals',
          description: 'Explore the basics of film scoring and learn how to create music that enhances the emotional impact of visual media.',
          slug: 'film-scoring-fundamentals',
          isFeatured: true
        },
        {
          title: 'Music Business 101',
          description: 'Get an introduction to the music business, including licensing, royalties, and the role of managers and agents.',
          slug: 'music-business-101',
          isFeatured: true
        }
      ];
      
  return (
    <div className='p-12 bg-gray-900 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl '>Enhanced Your Musical Journey</p>
            </div>
            <div className='mt-10'>
                    <HoverEffect
                    items={featuredWebinars.map(webinar=>(
                        {
                            title:webinar.title,
                            description:webinar.description,
                            link:'/'

                        }
                    ))}
                    />
            </div>  
            <div className='mt-10 text-center'>

                <Link href={'/'} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View All webinars
                </Link>

            </div>
        </div>
    </div>
  )
}

export default UpCommingWebinars