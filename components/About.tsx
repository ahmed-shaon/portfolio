import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';
import pageInfo from '../sanity/schemas/pageInfo';

type Props = {
    pageInfo: PageInfo;
}

export default function About({ pageInfo}: Props) {
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='flex flex-col relative h-screen  md:flex-row md:text-left text-center max-w-7xl justify-evenly mx-auto items-center px-10'>
            <h3 className='absolute top-16 xl:top-24 tracking-[20px] text-2xl text-gray-500 uppercase'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0

                }}                
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                className='-mb-20 md:mb-0 flex-shrink-0 object-cover w-48 h-48 rounded-full md:w-80 md:h-80 md:rounded-lg  xl:w-[500px] xl:h-[500px]' src={urlFor(pageInfo?.profilePic).url()} alt="" />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>About Me</h4>
                <p className='text-base xl:text-lg'>{pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    )
}