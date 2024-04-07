"use client"
import React from 'react'
import SectionHeading from './Section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import {Variants, motion} from 'framer-motion'

const fadeInAnimationVariants: Variants = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.08 * index
      }
    })
  };
export default function Skills() {

  const { ref } = useSectionInView("Skills");
  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>
            My skills
        </SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill , index) => (
          <motion.li className='bg-white border border-black/[0.1] rounded-xl
          px-5 py-3' variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once:true,
          }}
          custom={index}
          key={index}>{skill}</motion.li>  
        ))}         
        </ul>
    </section>
  )
}
