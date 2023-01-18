import React from 'react';
import {motion} from 'framer-motion';
import { Skill as SkillType } from '../typing';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?:boolean;
    skill: SkillType;
}

export default function Skill({directionLeft, skill}: Props) {
  return (
    <div
    className='group flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft? -200: 200,
            opacity:0
        }}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out overflow-y-scroll'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 md:w-16 md:h-16 xl:w-32 xl:h-32 rounded-full z-0'>
            <motion.div            
            className='flex items-center justify-center h-full'> 
                <p className='text-lg xl:text-3xl font-bold text-black opacity-100'>{skill?.progress}%</p>
            </motion.div>
        </div>
    </div>
  )
}