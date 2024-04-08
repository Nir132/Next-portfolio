"use client"
import React from 'react';
import SectionHeading from './Section-heading';
import {  experiencesData2 } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useSectionInView } from '@/lib/hooks';


export default function Experience() {
    
  const { ref } = useSectionInView("Experience",0.4);

  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>
        My experience
      </SectionHeading>
      <VerticalTimeline lineColor='' animate={true}>
        {experiencesData2.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement visible={true} 
             contentStyle={{
                background:"#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",       
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background: "white" ,
                color: "!black",
                fontSize: "1.5rem",
              }}>
                <h3 className="font-semibold capitalize">{exp.title}</h3>
                <p className="font-normal !mt-0">{exp.location}</p>
                <p  className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{exp.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
