import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { motion } from "framer-motion";
import { GetStaticProps } from 'next'
import { PageInfo, Project, Skill, Social } from '../typing'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocial'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
  skills: Skill[];
  projects: Project[];
}

export default function Home({ pageInfo, projects, skills, socials }: Props) {
  // export default function Home({}:Props) {
  console.log("HI");

  console.log(projects);

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0B]/80'>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.png" />
        <title>Shaon Portfolio</title>
      </Head>
      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>


      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>


      {/* <section id="experience" className='snap-center'>
        <WorkExperience />
      </section> */}

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id="contactme" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5'>
          <div className='flex items-center justify-center md:justify-end xl:justify-end mr-0 md:mr-8 xl:mr-8'>
            <button className='px-3 py-2 border border-[#F7AB0B] rounded-full uppercase tracking-widesttext-gray-500 transition-all text-xs hover:border-[#F7AB0B]/40 hover:text-[#F7AB0B]/40'>S</button>
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      projects,
      skills,
      socials
    },

    revalidate: 10,
  }
}
