import React, { useRef } from 'react'
import SectionHeading from './Section-heading'
import { projectsData } from "@/lib/data";
import Project from './Project';



export default function Projects() {
  return (
        <section id='projects' className='scroll-mt-28'>
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


