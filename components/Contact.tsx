"use client"
import React from 'react'
import SectionHeading from './Section-heading'

import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import {sendEmail} from '@/serverActions/sendEmail'
import SubmitBtn from "./Submit-Btn"
import toast from 'react-hot-toast'

export default function Contact() {
  

  const { ref } = useSectionInView("Contact");

  return (
   <motion.section id='contact' ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
   initial={{
    opacity:0,
   }}
   whileInView={{opacity:1}}
   transition={{duration:1}}
   viewport={{once:true}}>
    <SectionHeading>
        Contact Me
    </SectionHeading>
    <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at <a className="underline" 
        href="mailto:nirleibler91@gmil.com">nirleibler91@gmail.com</a>{" "}
        or through this form.</p>

    <form className='mt-10 flex flex-col dark:text-black/80' action={async (FormData) =>{
        const {data, error} = await sendEmail(FormData)
        if (error){
            toast.error(error)
            return;
        }
        else {
            toast.success("The email was sent successfully!")
        }
    }}>
        <input className="h-14 px-4 rounded-lg borderBlack dark:bg-white 
        dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all 
        dark:outline-none" type="email" required maxLength={500} 
        name='senderEmail' placeholder='Your email'/>
        <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 
        dark:focus:bg-opacity-100 transition-all dark:outline-none"  id="" placeholder='Your message' maxLength={1000} required></textarea>
        <SubmitBtn/>
    </form>
   </motion.section>
  )
}
