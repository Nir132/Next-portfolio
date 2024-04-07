"use client";
import React, { useEffect } from 'react'
import SectionHeading from './Section-heading'
import { projectsData } from "@/lib/data";
import Project from './Project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';



export default function Projects() {

    const {ref, inView} = useInView({
        threshold:0.5
    });
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext()
   
    useEffect(()=>{
      if (inView && Date.now()- timeOfLastClick<1000){
        setActiveSection("Projects");
      }
    },[inView,setActiveSection,timeOfLastClick])

  return (
        <section id='projects' ref={ref} className='scroll-mt-28'>
            <SectionHeading>
                My Projects
            </SectionHeading>
            <div>
                {projectsData.map((project,i)=>(
                    <React.Fragment key={i}>
                        <Project {...project}/>
                    </React.Fragment>
                ))}         
            </div>
        
        </section>
       
  )
}


