import React from 'react';
import Skill from './Skill';
import {motion} from 'framer-motion';
import { Skill as SkillType } from '../typing';

type Props = {
  skills: SkillType[];
}



export default function Skills({skills}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.2}}
    className='relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto justify-center items-center'>
        <h3 className='absolute top-16 xl:top-24 tracking-[20px] text-2xl uppercase text-gray-500'>Skills</h3>

        <h3 
        className='absolute top-28 xl:top-32 tracking-[3px] uppercase text-gray-500 text-sm'>Hover over a skill for current proficency</h3>

        <div className='grid grid-cols-4 md:grid-cols-5 xl:grid-cols-4 gap-5'>
          {
            skills.slice(0, skills.length/2).map((skill) => <Skill key={skill._id} skill={skill} directionLeft/>)
          }
          {
            skills.slice(skills.length/2, skills.length).map((skill) => <Skill key={skill._id} skill={skill} />)
          }
        </div>
    </motion.div>
  )
}