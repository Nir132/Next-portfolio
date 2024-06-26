"use client"
import React from 'react'
import SectionHeading from './Section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';


export default function About() {

  const { ref } = useSectionInView("About");

  return (
   <motion.section id="about" ref={ref} className='mb-28 max-w-[45rem]
    text-center leading-8 sm:mb-40 scroll-mt-28'
   initial={{opacity:0, y:100}}
   animate={{opacity:1, y:0}}
   transition={{
    delay:0.18
   }}>
    <SectionHeading>About me</SectionHeading>
    <p className='mb-3'> 
      Detail-oriented data analyst and developer with a Master&apos;s degree in{" "}
        <span className="font-medium">Medical Science</span>, I decided to shift gears
        to pursue my interest programming and analytics. I want to learn a wide range of tools ,so I studied {" "}
        <span className="font-medium">full-stack development and Data analytics</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Data Analysis, Python, SQL, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
    </p>
    <p>
    <span className="italic">When I&apos;m not coding</span>, I enjoy playing
         games with my son , watching movies,  and spending time with family and friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and biology</span>.
    </p>
   </motion.section>
  )
}
