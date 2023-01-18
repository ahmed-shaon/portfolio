import React from 'react';
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative overflow-hidden flex flex-col md:flex-row justify-center items-center max-w-full mx-auto text-left'>
        <h3 className='absolute uppercase tracking-[20px] text-2xl text-gray-500 top-24'>Experience</h3>

        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
    </motion.div>
  )
}