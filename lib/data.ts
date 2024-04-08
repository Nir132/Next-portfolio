import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiDnaBold } from "react-icons/pi";
import { ImStatsDots } from "react-icons/im";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const experiencesData2 = [
  {
    title: "B.Sc. in Biotechnology",
    location: "Tel Hai college",
    description:
      "I studied pre-Med courses",
    icon: React.createElement(LuGraduationCap),
    date: "2015-2018",
  },
  {
    title: "M.Sc. in Medical Sciences",
    location: "Tel Aviv University",
    description:
      "My thesis project focused on a de-novo mutation in NMDA receptors leading to severe epileptic encephalopathy. Our research work gave me a theoretical background in Neuroscience, genetics and molecular biology",
    icon: React.createElement(PiDnaBold),
    date: "2018 - 2020",
  },
  {
    title: "Biostatistician ",
    location: "Tel Aviv",
    description:
      "Clinical Studies Data Analyst and SAS Programmer",
    icon: React.createElement(ImStatsDots),
    date: "2021 - 2022",
  },
  {
    title: "Data Analyst ",
    location: "Tel Aviv",
    description:
      "Applied statistical models to large data sets to identify patterns, trends, and insights that support project decisions making and improved performance using SQL and python",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Python Developer ",
    location: "Tel Aviv",
    description:
      "Designed and implemented a NoSQL database architecture tailored to project requirements",
    icon: React.createElement(FaPython),
    date: "2023 -",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Framer Motion",
  "Git",
  "Tailwind",
  "Python",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Pandas",
  "PyTourch",
  "Flask",
  "Django",
  "AWS"
 
] as const;