import React from 'react'
import SectionHeading from './Section-heading'
import { projectsData } from "@/lib/data";
import Image from 'next/image';


type ProjectProps = typeof projectsData[0]; 

function Project({title,description,tags ,imageUrl}: ProjectProps){
    return (
    <article className='bg-gray-100 max-w-[42rem] border border-black/5
    overflow-hidden relative sm:pr-8'>
        <div>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
            <ul className='flex flex-wrap mt-4'>
                {tags.map((tag,i)=>(
                    <li key={i} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider 
                    text-white rounded-full dark:text-white/70">{tag}</li>
                ))}
            </ul>
                <Image className='absolute top-8 -right-40' src={imageUrl} alt='Project I worked on' quality={95}/>
        </div>
    </article>
    )
}
export default function Projects() {
  return (
        <section>
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


