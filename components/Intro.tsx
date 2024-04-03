"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{
                     type: "tween",
                     duration: 0.2,
                   }}>
                    <Image src={"https://media.licdn.com/dms/image/D4E03AQFH07nTYfkZ8g/profile-displayphoto-shrink_400_400/0/1710407058196?e=1717632000&v=beta&t=VhM1u89KkVBZWUMboHT8bKBlPAtQn65JUChf7E8NKvo"}
                    alt="Nir" width={192} height={192} quality={96} priority={true}
                    className='rounded-full border-[0.35rem] border-white object-cover shadow-xl'></Image>
                </motion.div>
                <motion.span className=' absolute text-4xl top-[9.25rem] right-0'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                 }}>👋</motion.span>
            </div>
        </div>
        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hello, I'm Nir.</span> I'm a{" "}
            <span className="font-bold">Software developer</span> with{" "}
            <span className="font-bold">3 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">Data and React (Next.js)</span>.
        </motion.h1>
        <div>
          <Link href="#contact" className='bg-gray-900 px-7 py-3 flex items-center gap-2 rounded-full text-cyan-100'>Contact me 
           <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /></Link>  
        </div>
    </section>
  )
}
