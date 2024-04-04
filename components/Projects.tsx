import React from 'react'
import SectionHeading from './Section-heading'
import { projectsData } from "@/lib/data";
import Image from 'next/image';


type ProjectProps = typeof projectsData[0]; 

function Project({title,description,tags ,imageUrl}: ProjectProps){
    return (
    <article className=' group bg-gray-100 max-w-[42rem] border border-black/5
    overflow-hidden relative sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8
    hover:bg-gray-200'>
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
        flex flex-col h-full  group-even: sm:group-even:ml-[18rem]">
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {tags.map((tag,i)=>(
                    <li key={i} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider 
                    text-white rounded-full dark:text-white/70">{tag}</li>
                ))}
            </ul>
                <Image className='absolute top-8 -right-40
                w-[28.25rem] rounded-t-lg shadow-2xl 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                group-even:right-[initial] group-even:-left-40'
                 src={imageUrl} alt='Project I worked on' quality={95}/>
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


