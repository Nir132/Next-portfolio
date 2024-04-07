"use client";
import React from 'react'
import SectionHeading from './Section-heading'
import { projectsData } from "@/lib/data";
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';



export default function Projects() {

 const {ref} = useSectionInView("Projects",0.5)

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


