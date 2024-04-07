
import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Section-divider";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 text-center">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
    </main>
  )
}
